package shared

import (
	"time"
)

type Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollectionStatusEnum string

const (
	Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollectionStatusEnumRequested                   Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollectionStatusEnum = "requested"
	Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollectionStatusEnumWaitingForWriteJwTsToExpire Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollectionStatusEnum = "waiting for write JWTs to expire"
	Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollectionStatusEnumScanningManifests           Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollectionStatusEnum = "scanning manifests"
	Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollectionStatusEnumDeletingUnreferencedBlobs   Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollectionStatusEnum = "deleting unreferenced blobs"
	Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollectionStatusEnumCancelling                  Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollectionStatusEnum = "cancelling"
	Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollectionStatusEnumFailed                      Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollectionStatusEnum = "failed"
	Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollectionStatusEnumSucceeded                   Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollectionStatusEnum = "succeeded"
	Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollectionStatusEnumCancelled                   Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollectionStatusEnum = "cancelled"
)

type Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollection struct {
	BlobsDeleted *int64                                                                                                                                             `json:"blobs_deleted"`
	CreatedAt    *time.Time                                                                                                                                         `json:"created_at"`
	FreedBytes   *int64                                                                                                                                             `json:"freed_bytes"`
	RegistryName *string                                                                                                                                            `json:"registry_name"`
	Status       *Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollectionStatusEnum `json:"status"`
	UpdatedAt    *time.Time                                                                                                                                         `json:"updated_at"`
	UUID         *string                                                                                                                                            `json:"uuid"`
}
