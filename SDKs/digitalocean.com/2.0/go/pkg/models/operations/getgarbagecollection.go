package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetGarbageCollectionPathParams struct {
	RegistryName string `pathParam:"style=simple,explode=false,name=registry_name"`
}

type GetGarbageCollectionRequest struct {
	PathParams GetGarbageCollectionPathParams
}

type GetGarbageCollection200ApplicationJSONGarbageCollectionStatusEnum string

const (
	GetGarbageCollection200ApplicationJSONGarbageCollectionStatusEnumRequested                   GetGarbageCollection200ApplicationJSONGarbageCollectionStatusEnum = "requested"
	GetGarbageCollection200ApplicationJSONGarbageCollectionStatusEnumWaitingForWriteJwTsToExpire GetGarbageCollection200ApplicationJSONGarbageCollectionStatusEnum = "waiting for write JWTs to expire"
	GetGarbageCollection200ApplicationJSONGarbageCollectionStatusEnumScanningManifests           GetGarbageCollection200ApplicationJSONGarbageCollectionStatusEnum = "scanning manifests"
	GetGarbageCollection200ApplicationJSONGarbageCollectionStatusEnumDeletingUnreferencedBlobs   GetGarbageCollection200ApplicationJSONGarbageCollectionStatusEnum = "deleting unreferenced blobs"
	GetGarbageCollection200ApplicationJSONGarbageCollectionStatusEnumCancelling                  GetGarbageCollection200ApplicationJSONGarbageCollectionStatusEnum = "cancelling"
	GetGarbageCollection200ApplicationJSONGarbageCollectionStatusEnumFailed                      GetGarbageCollection200ApplicationJSONGarbageCollectionStatusEnum = "failed"
	GetGarbageCollection200ApplicationJSONGarbageCollectionStatusEnumSucceeded                   GetGarbageCollection200ApplicationJSONGarbageCollectionStatusEnum = "succeeded"
	GetGarbageCollection200ApplicationJSONGarbageCollectionStatusEnumCancelled                   GetGarbageCollection200ApplicationJSONGarbageCollectionStatusEnum = "cancelled"
)

type GetGarbageCollection200ApplicationJSONGarbageCollection struct {
	BlobsDeleted *int64                                                             `json:"blobs_deleted"`
	CreatedAt    *time.Time                                                         `json:"created_at"`
	FreedBytes   *int64                                                             `json:"freed_bytes"`
	RegistryName *string                                                            `json:"registry_name"`
	Status       *GetGarbageCollection200ApplicationJSONGarbageCollectionStatusEnum `json:"status"`
	UpdatedAt    *time.Time                                                         `json:"updated_at"`
	UUID         *string                                                            `json:"uuid"`
}

type GetGarbageCollection200ApplicationJSON struct {
	GarbageCollection *GetGarbageCollection200ApplicationJSONGarbageCollection `json:"garbage_collection"`
}

type GetGarbageCollection401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type GetGarbageCollectionResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetGarbageCollection200ApplicationJSONObject              *GetGarbageCollection200ApplicationJSON
	GetGarbageCollection401ApplicationJSONObject              *GetGarbageCollection401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
