import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateSchemaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" })
  apiVersionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=schemaId" })
  schemaId: string;
}


export class UpdateSchemaRequestBodySchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateSchemaRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: UpdateSchemaRequestBodySchema;
}


export class UpdateSchema200ApplicationJsonSchema extends SpeakeasyBase {
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


export class UpdateSchema200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: UpdateSchema200ApplicationJsonSchema;
}


export class UpdateSchemaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateSchemaPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateSchemaRequestBody;
}


export class UpdateSchemaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateSchema200ApplicationJsonObject?: UpdateSchema200ApplicationJson;
}
