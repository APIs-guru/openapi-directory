import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateSchemaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" })
  apiVersionId: string;
}


export class CreateSchemaRequestBodySchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class CreateSchemaRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: CreateSchemaRequestBodySchema;
}


export class CreateSchema200ApplicationJsonSchema extends SpeakeasyBase {
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


export class CreateSchema200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: CreateSchema200ApplicationJsonSchema;
}


export class CreateSchemaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateSchemaPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateSchemaRequestBody;
}


export class CreateSchemaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createSchema200ApplicationJsonObject?: CreateSchema200ApplicationJson;
}
