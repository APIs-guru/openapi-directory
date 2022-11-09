import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateSchemaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" })
  apiVersionId: string;
}


export class CreateSchemaRequestBodySchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=schema" })
  schema?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class CreateSchemaRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=schema" })
  schema?: CreateSchemaRequestBodySchema;
}


export class CreateSchemaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateSchemaPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateSchemaRequestBody;
}


export class CreateSchema200ApplicationJsonSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=updateBy" })
  updateBy?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: string;
}


export class CreateSchema200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=schema" })
  schema?: CreateSchema200ApplicationJsonSchema;
}


export class CreateSchemaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createSchema200ApplicationJsonObject?: CreateSchema200ApplicationJson;
}
