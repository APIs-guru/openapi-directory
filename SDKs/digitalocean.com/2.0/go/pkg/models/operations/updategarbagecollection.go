package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type UpdateGarbageCollectionPathParams struct {
	GarbageCollectionUUID string `pathParam:"style=simple,explode=false,name=garbage_collection_uuid"`
	RegistryName          string `pathParam:"style=simple,explode=false,name=registry_name"`
}

type UpdateGarbageCollectionRequestBody struct {
	Cancel *bool `json:"cancel"`
}

type UpdateGarbageCollectionRequest struct {
	PathParams UpdateGarbageCollectionPathParams
	Request    UpdateGarbageCollectionRequestBody `request:"mediaType=application/json"`
}

type UpdateGarbageCollection200ApplicationJSONGarbageCollectionStatusEnum string

const (
	UpdateGarbageCollection200ApplicationJSONGarbageCollectionStatusEnumRequested                   UpdateGarbageCollection200ApplicationJSONGarbageCollectionStatusEnum = "requested"
	UpdateGarbageCollection200ApplicationJSONGarbageCollectionStatusEnumWaitingForWriteJwTsToExpire UpdateGarbageCollection200ApplicationJSONGarbageCollectionStatusEnum = "waiting for write JWTs to expire"
	UpdateGarbageCollection200ApplicationJSONGarbageCollectionStatusEnumScanningManifests           UpdateGarbageCollection200ApplicationJSONGarbageCollectionStatusEnum = "scanning manifests"
	UpdateGarbageCollection200ApplicationJSONGarbageCollectionStatusEnumDeletingUnreferencedBlobs   UpdateGarbageCollection200ApplicationJSONGarbageCollectionStatusEnum = "deleting unreferenced blobs"
	UpdateGarbageCollection200ApplicationJSONGarbageCollectionStatusEnumCancelling                  UpdateGarbageCollection200ApplicationJSONGarbageCollectionStatusEnum = "cancelling"
	UpdateGarbageCollection200ApplicationJSONGarbageCollectionStatusEnumFailed                      UpdateGarbageCollection200ApplicationJSONGarbageCollectionStatusEnum = "failed"
	UpdateGarbageCollection200ApplicationJSONGarbageCollectionStatusEnumSucceeded                   UpdateGarbageCollection200ApplicationJSONGarbageCollectionStatusEnum = "succeeded"
	UpdateGarbageCollection200ApplicationJSONGarbageCollectionStatusEnumCancelled                   UpdateGarbageCollection200ApplicationJSONGarbageCollectionStatusEnum = "cancelled"
)

type UpdateGarbageCollection200ApplicationJSONGarbageCollection struct {
	BlobsDeleted *int64                                                                `json:"blobs_deleted"`
	CreatedAt    *time.Time                                                            `json:"created_at"`
	FreedBytes   *int64                                                                `json:"freed_bytes"`
	RegistryName *string                                                               `json:"registry_name"`
	Status       *UpdateGarbageCollection200ApplicationJSONGarbageCollectionStatusEnum `json:"status"`
	UpdatedAt    *time.Time                                                            `json:"updated_at"`
	UUID         *string                                                               `json:"uuid"`
}

type UpdateGarbageCollection200ApplicationJSON struct {
	GarbageCollection *UpdateGarbageCollection200ApplicationJSONGarbageCollection `json:"garbage_collection"`
}

type UpdateGarbageCollection401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type UpdateGarbageCollectionResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	UpdateGarbageCollection200ApplicationJSONObject           *UpdateGarbageCollection200ApplicationJSON
	UpdateGarbageCollection401ApplicationJSONObject           *UpdateGarbageCollection401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
