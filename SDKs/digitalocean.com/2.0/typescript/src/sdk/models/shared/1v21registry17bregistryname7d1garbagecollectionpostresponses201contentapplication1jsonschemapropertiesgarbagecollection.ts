import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollectionStatusEnum {
    Requested = "requested"
,    WaitingForWriteJwTsToExpire = "waiting for write JWTs to expire"
,    ScanningManifests = "scanning manifests"
,    DeletingUnreferencedBlobs = "deleting unreferenced blobs"
,    Cancelling = "cancelling"
,    Failed = "failed"
,    Succeeded = "succeeded"
,    Cancelled = "cancelled"
}


export class Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=blobs_deleted" })
  blobsDeleted?: number;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=freed_bytes" })
  freedBytes?: number;

  @Metadata({ data: "json, name=registry_name" })
  registryName?: string;

  @Metadata({ data: "json, name=status" })
  status?: Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollectionStatusEnum;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=uuid" })
  uuid?: string;
}
