import "reflect-metadata";

import {
  GetSimplePathParams,
  ParamDecorator,
  ppMetadataKey,
} from "./pathparams";

interface propInfo {
  key: string | symbol;
  type: any;
  elemType: any;
  elemDepth: number;
}

function isSpeakeasyBase(type: any): boolean {
  return type && Object.getPrototypeOf(type)?.name == "SpeakeasyBase";
}

function handleArray(value: any, elemType: any, elemDepth: number): any {
  if (!Array.isArray(value)) {
    return value;
  }

  if (elemDepth == 1) {
    return value.map((v: any) => new elemType(v));
  } else {
    return value.map((v: any) => {
      if (Array.isArray(v)) {
        return handleArray(v, elemType, elemDepth - 1);
      } else if (typeof v == "object") {
        return handleObject(v, elemType, elemDepth - 1);
      } else {
        return v;
      }
    });
  }
}

function handleObject(value: any, elemType: any, elemDepth: number): any {
  if (typeof value != "object") {
    return value;
  }

  if (elemDepth == 1) {
    return Object.keys(value).reduce((acc: any, key: string) => {
      acc[key] = new elemType(value[key]);
      return acc;
    }, {});
  } else {
    return Object.keys(value).reduce((acc: any, key: string) => {
      const v = value[key];
      if (Array.isArray(v)) {
        acc[key] = handleArray(v, elemType, elemDepth - 1);
      } else if (typeof v == "object") {
        acc[key] = handleObject(v, elemType, elemDepth - 1);
      } else {
        acc[key] = v;
      }
      return acc;
    }, {});
  }
}

export class SpeakeasyBase {
  constructor(payload?: Record<string | symbol, unknown>) {
    const props: propInfo[] = (this as any)["__props__"];
    if (props) {
      for (const prop of props) {
        if (payload && payload.hasOwnProperty(prop.key)) {
          const value = payload[prop.key];
          if (isSpeakeasyBase(prop.type)) {
            (this as any)[prop.key] = new prop.type(value);
          } else if (
            prop.type.name == "Array" &&
            isSpeakeasyBase(prop.elemType)
          ) {
            (this as any)[prop.key] = handleArray(
              value,
              prop.elemType,
              prop.elemDepth
            );
          } else if (
            prop.type.name == "Object" &&
            isSpeakeasyBase(prop.elemType)
          ) {
            (this as any)[prop.key] = handleObject(
              value,
              prop.elemType,
              prop.elemDepth
            );
          } else {
            (this as any)[prop.key] = value;
          }
        }
      }
    }
  }
}

export function SpeakeasyMetadata<
  T extends SpeakeasyBase = Record<string | symbol, unknown>
>(params?: {
  data?: string;
  elemType?: { new (): T };
  elemDepth?: number;
}): PropertyDecorator {
  return (target, propertyKey) => {
    if (params?.data) {
      const annsArr = params.data.split(", ");

      for (let i = 0; i < annsArr.length; i += 2) {
        Reflect.defineMetadata(annsArr[i], annsArr[i + 1], target, propertyKey);
      }
    }

    let props: propInfo[];
    if (target.hasOwnProperty("__props__")) {
      props = (target as any)["__props__"];
    } else {
      props = (target as any)["__props__"] = [];
    }

    const prop = {
      key: propertyKey,
      type: Reflect.getMetadata("design:type", target, propertyKey),
    } as propInfo;

    if (params?.elemType) {
      prop.elemType = params.elemType;
      prop.elemDepth = params.elemDepth || 1;
    }

    props.push(prop);
  };
}

export function ReplaceParameters(
  stringWithParams: string,
  params: Map<string, string>
): string {
  let res: string = stringWithParams;
  params.forEach((value, key) => {
    const match: string = "{" + key + "}";
    res = res.replaceAll(match, value);
  });
  return res;
}

export function GenerateURL(
  serverURL: string,
  path: string,
  pathParams: any
): string {
  const url: string = serverURL.replace(/\/$/, "") + path;
  const parsedParameters: Map<string, string> = new Map<string, string>();
  const fieldNames: string[] = Object.getOwnPropertyNames(pathParams);
  fieldNames.forEach((fname) => {
    const ppAnn: string = Reflect.getMetadata(ppMetadataKey, pathParams, fname);
    if (ppAnn == null) return;
    const ppDecorator: ParamDecorator = ParseParamDecorator(
      ppAnn,
      fname,
      "simple",
      false
    );
    if (ppDecorator == null) return;
    switch (ppDecorator.Style) {
      case "simple":
        const simpleParams: Map<string, string> = GetSimplePathParams(
          ppDecorator.ParamName,
          pathParams[fname],
          ppDecorator.Explode
        );
        simpleParams.forEach((value, key) => {
          parsedParameters.set(key, value);
        });
    }
  });
  return ReplaceParameters(url, parsedParameters);
}

export function ParseParamDecorator(
  ann: string,
  fName: string,
  defaultStyle: string,
  defaultExplode: boolean
): ParamDecorator {
  // style=simple;explode=false;name=apiID
  const decorator: ParamDecorator = new ParamDecorator(
    defaultStyle,
    defaultExplode,
    fName.toLowerCase()
  );

  ann.split(";").forEach((annPart) => {
    const [paramKey, paramVal]: string[] = annPart.split("=");
    switch (paramKey) {
      case "style":
        decorator.Style = paramVal;
        break;
      case "explode":
        decorator.Explode = paramVal == "true";
        break;
      case "name":
        decorator.ParamName = paramVal;
        break;
      case "serialization":
        decorator.Serialization = paramVal;
    }
  });
  return decorator;
}
