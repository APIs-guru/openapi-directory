import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetGarbageCollectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=registry_name" })
  registryName: string;
}


export class GetGarbageCollectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGarbageCollectionPathParams;
}

export enum GetGarbageCollection200ApplicationJsonGarbageCollectionStatusEnum {
    Requested = "requested"
,    WaitingForWriteJwTsToExpire = "waiting for write JWTs to expire"
,    ScanningManifests = "scanning manifests"
,    DeletingUnreferencedBlobs = "deleting unreferenced blobs"
,    Cancelling = "cancelling"
,    Failed = "failed"
,    Succeeded = "succeeded"
,    Cancelled = "cancelled"
}


export class GetGarbageCollection200ApplicationJsonGarbageCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=blobs_deleted" })
  blobsDeleted?: number;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=freed_bytes" })
  freedBytes?: number;

  @Metadata({ data: "json, name=registry_name" })
  registryName?: string;

  @Metadata({ data: "json, name=status" })
  status?: GetGarbageCollection200ApplicationJsonGarbageCollectionStatusEnum;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class GetGarbageCollection200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=garbage_collection" })
  garbageCollection?: GetGarbageCollection200ApplicationJsonGarbageCollection;
}


export class GetGarbageCollection401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetGarbageCollectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getGarbageCollection200ApplicationJsonObject?: GetGarbageCollection200ApplicationJson;

  @Metadata()
  getGarbageCollection401ApplicationJsonObject?: GetGarbageCollection401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
