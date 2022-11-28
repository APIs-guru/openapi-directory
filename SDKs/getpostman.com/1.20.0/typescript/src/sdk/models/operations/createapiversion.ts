import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateApiVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;
}


export class CreateApiVersionRequestBodyVersionSourceRelations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation" })
  documentation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mock" })
  mock?: boolean;

  @SpeakeasyMetadata({ data: "json, name=monitor" })
  monitor?: boolean;
}


export class CreateApiVersionRequestBodyVersionSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=relations" })
  relations?: CreateApiVersionRequestBodyVersionSourceRelations;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: boolean;
}


export class CreateApiVersionRequestBodyVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: CreateApiVersionRequestBodyVersionSource;
}


export class CreateApiVersionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: CreateApiVersionRequestBodyVersion;
}


export class CreateApiVersion200ApplicationJsonVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api" })
  api?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class CreateApiVersion200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: CreateApiVersion200ApplicationJsonVersion;
}


export class CreateApiVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateApiVersionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateApiVersionRequestBody;
}


export class CreateApiVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createApiVersion200ApplicationJsonObject?: CreateApiVersion200ApplicationJson;
}
