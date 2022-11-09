import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSchemaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" })
  apiVersionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=schemaId" })
  schemaId: string;
}


export class GetSchemaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSchemaPathParams;
}


export class GetSchema200ApplicationJsonSchema extends SpeakeasyBase {
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


export class GetSchema200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=schema" })
  schema?: GetSchema200ApplicationJsonSchema;
}


export class GetSchemaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getSchema200ApplicationJsonObject?: GetSchema200ApplicationJson;
}
