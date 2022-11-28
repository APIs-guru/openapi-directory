import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSchemaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" })
  apiVersionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=schemaId" })
  schemaId: string;
}


export class GetSchema200ApplicationJsonSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=updateBy" })
  updateBy?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: string;
}


export class GetSchema200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: GetSchema200ApplicationJsonSchema;
}


export class GetSchemaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSchemaPathParams;
}


export class GetSchemaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSchema200ApplicationJsonObject?: GetSchema200ApplicationJson;
}
