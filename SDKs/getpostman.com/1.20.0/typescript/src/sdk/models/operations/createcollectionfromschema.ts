import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateCollectionFromSchemaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" })
  apiVersionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=schemaId" })
  schemaId: string;
}


export class CreateCollectionFromSchemaQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=workspace" })
  workspace?: string;
}


export class CreateCollectionFromSchemaRequestBodyRelations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class CreateCollectionFromSchemaRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=relations", elemType: CreateCollectionFromSchemaRequestBodyRelations })
  relations?: CreateCollectionFromSchemaRequestBodyRelations[];
}


export class CreateCollectionFromSchema200ApplicationJsonCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}


export class CreateCollectionFromSchema200ApplicationJsonRelations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class CreateCollectionFromSchema200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collection" })
  collection?: CreateCollectionFromSchema200ApplicationJsonCollection;

  @SpeakeasyMetadata({ data: "json, name=relations", elemType: CreateCollectionFromSchema200ApplicationJsonRelations })
  relations?: CreateCollectionFromSchema200ApplicationJsonRelations[];
}


export class CreateCollectionFromSchemaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateCollectionFromSchemaPathParams;

  @SpeakeasyMetadata()
  queryParams: CreateCollectionFromSchemaQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateCollectionFromSchemaRequestBody;
}


export class CreateCollectionFromSchemaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createCollectionFromSchema200ApplicationJsonObject?: CreateCollectionFromSchema200ApplicationJson;
}
