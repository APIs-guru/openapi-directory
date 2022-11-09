import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateApiVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;
}


export class CreateApiVersionRequestBodyVersionSourceRelations extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation" })
  documentation?: boolean;

  @Metadata({ data: "json, name=mock" })
  mock?: boolean;

  @Metadata({ data: "json, name=monitor" })
  monitor?: boolean;
}


export class CreateApiVersionRequestBodyVersionSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=relations" })
  relations?: CreateApiVersionRequestBodyVersionSourceRelations;

  @Metadata({ data: "json, name=schema" })
  schema?: boolean;
}


export class CreateApiVersionRequestBodyVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=source" })
  source?: CreateApiVersionRequestBodyVersionSource;
}


export class CreateApiVersionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=version" })
  version?: CreateApiVersionRequestBodyVersion;
}


export class CreateApiVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateApiVersionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateApiVersionRequestBody;
}


export class CreateApiVersion200ApplicationJsonVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=api" })
  api?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class CreateApiVersion200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=version" })
  version?: CreateApiVersion200ApplicationJsonVersion;
}


export class CreateApiVersionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createApiVersion200ApplicationJsonObject?: CreateApiVersion200ApplicationJson;
}
