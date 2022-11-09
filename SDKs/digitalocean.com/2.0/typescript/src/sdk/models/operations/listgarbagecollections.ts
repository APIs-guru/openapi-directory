import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListGarbageCollectionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=registry_name" })
  registryName: string;
}


export class ListGarbageCollectionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ListGarbageCollectionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListGarbageCollectionsPathParams;

  @Metadata()
  queryParams: ListGarbageCollectionsQueryParams;
}


export class ListGarbageCollections200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=garbage_collections", elemType: shared.Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollection })
  garbageCollections?: shared.Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollection[];
}


export class ListGarbageCollections401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListGarbageCollectionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listGarbageCollections200ApplicationJsonObject?: ListGarbageCollections200ApplicationJson;

  @Metadata()
  listGarbageCollections401ApplicationJsonObject?: ListGarbageCollections401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
