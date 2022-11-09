import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateCollectionFromSchemaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" })
  apiVersionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=schemaId" })
  schemaId: string;
}


export class CreateCollectionFromSchemaQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=workspace" })
  workspace?: string;
}


export class CreateCollectionFromSchemaRequestBodyRelations extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class CreateCollectionFromSchemaRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=relations", elemType: operations.CreateCollectionFromSchemaRequestBodyRelations })
  relations?: CreateCollectionFromSchemaRequestBodyRelations[];
}


export class CreateCollectionFromSchemaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateCollectionFromSchemaPathParams;

  @Metadata()
  queryParams: CreateCollectionFromSchemaQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateCollectionFromSchemaRequestBody;
}


export class CreateCollectionFromSchema200ApplicationJsonCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}


export class CreateCollectionFromSchema200ApplicationJsonRelations extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class CreateCollectionFromSchema200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=collection" })
  collection?: CreateCollectionFromSchema200ApplicationJsonCollection;

  @Metadata({ data: "json, name=relations", elemType: operations.CreateCollectionFromSchema200ApplicationJsonRelations })
  relations?: CreateCollectionFromSchema200ApplicationJsonRelations[];
}


export class CreateCollectionFromSchemaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createCollectionFromSchema200ApplicationJsonObject?: CreateCollectionFromSchema200ApplicationJson;
}
