import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateGarbageCollectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=garbage_collection_uuid" })
  garbageCollectionUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=registry_name" })
  registryName: string;
}


export class UpdateGarbageCollectionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=cancel" })
  cancel?: boolean;
}


export class UpdateGarbageCollectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateGarbageCollectionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateGarbageCollectionRequestBody;
}

export enum UpdateGarbageCollection200ApplicationJsonGarbageCollectionStatusEnum {
    Requested = "requested"
,    WaitingForWriteJwTsToExpire = "waiting for write JWTs to expire"
,    ScanningManifests = "scanning manifests"
,    DeletingUnreferencedBlobs = "deleting unreferenced blobs"
,    Cancelling = "cancelling"
,    Failed = "failed"
,    Succeeded = "succeeded"
,    Cancelled = "cancelled"
}


export class UpdateGarbageCollection200ApplicationJsonGarbageCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=blobs_deleted" })
  blobsDeleted?: number;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=freed_bytes" })
  freedBytes?: number;

  @Metadata({ data: "json, name=registry_name" })
  registryName?: string;

  @Metadata({ data: "json, name=status" })
  status?: UpdateGarbageCollection200ApplicationJsonGarbageCollectionStatusEnum;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class UpdateGarbageCollection200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=garbage_collection" })
  garbageCollection?: UpdateGarbageCollection200ApplicationJsonGarbageCollection;
}


export class UpdateGarbageCollection401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class UpdateGarbageCollectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateGarbageCollection200ApplicationJsonObject?: UpdateGarbageCollection200ApplicationJson;

  @Metadata()
  updateGarbageCollection401ApplicationJsonObject?: UpdateGarbageCollection401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
