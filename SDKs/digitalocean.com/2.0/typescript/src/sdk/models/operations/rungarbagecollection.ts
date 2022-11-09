import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RunGarbageCollectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=registry_name" })
  registryName: string;
}


export class RunGarbageCollectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RunGarbageCollectionPathParams;
}

export enum RunGarbageCollection201ApplicationJsonGarbageCollectionStatusEnum {
    Requested = "requested"
,    WaitingForWriteJwTsToExpire = "waiting for write JWTs to expire"
,    ScanningManifests = "scanning manifests"
,    DeletingUnreferencedBlobs = "deleting unreferenced blobs"
,    Cancelling = "cancelling"
,    Failed = "failed"
,    Succeeded = "succeeded"
,    Cancelled = "cancelled"
}


export class RunGarbageCollection201ApplicationJsonGarbageCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=blobs_deleted" })
  blobsDeleted?: number;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=freed_bytes" })
  freedBytes?: number;

  @Metadata({ data: "json, name=registry_name" })
  registryName?: string;

  @Metadata({ data: "json, name=status" })
  status?: RunGarbageCollection201ApplicationJsonGarbageCollectionStatusEnum;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class RunGarbageCollection201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=garbage_collection" })
  garbageCollection?: RunGarbageCollection201ApplicationJsonGarbageCollection;
}


export class RunGarbageCollection401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class RunGarbageCollectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  runGarbageCollection201ApplicationJsonObject?: RunGarbageCollection201ApplicationJson;

  @Metadata()
  runGarbageCollection401ApplicationJsonObject?: RunGarbageCollection401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
