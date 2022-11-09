import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateSchemaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" })
  apiVersionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=schemaId" })
  schemaId: string;
}


export class UpdateSchemaRequestBodySchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=schema" })
  schema?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateSchemaRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=schema" })
  schema?: UpdateSchemaRequestBodySchema;
}


export class UpdateSchemaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateSchemaPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateSchemaRequestBody;
}


export class UpdateSchema200ApplicationJsonSchema extends SpeakeasyBase {
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


export class UpdateSchema200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=schema" })
  schema?: UpdateSchema200ApplicationJsonSchema;
}


export class UpdateSchemaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateSchema200ApplicationJsonObject?: UpdateSchema200ApplicationJson;
}
