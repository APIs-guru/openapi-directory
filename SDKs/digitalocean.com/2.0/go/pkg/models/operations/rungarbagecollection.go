package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type RunGarbageCollectionPathParams struct {
	RegistryName string `pathParam:"style=simple,explode=false,name=registry_name"`
}

type RunGarbageCollectionRequest struct {
	PathParams RunGarbageCollectionPathParams
}

type RunGarbageCollection201ApplicationJSONGarbageCollectionStatusEnum string

const (
	RunGarbageCollection201ApplicationJSONGarbageCollectionStatusEnumRequested                   RunGarbageCollection201ApplicationJSONGarbageCollectionStatusEnum = "requested"
	RunGarbageCollection201ApplicationJSONGarbageCollectionStatusEnumWaitingForWriteJwTsToExpire RunGarbageCollection201ApplicationJSONGarbageCollectionStatusEnum = "waiting for write JWTs to expire"
	RunGarbageCollection201ApplicationJSONGarbageCollectionStatusEnumScanningManifests           RunGarbageCollection201ApplicationJSONGarbageCollectionStatusEnum = "scanning manifests"
	RunGarbageCollection201ApplicationJSONGarbageCollectionStatusEnumDeletingUnreferencedBlobs   RunGarbageCollection201ApplicationJSONGarbageCollectionStatusEnum = "deleting unreferenced blobs"
	RunGarbageCollection201ApplicationJSONGarbageCollectionStatusEnumCancelling                  RunGarbageCollection201ApplicationJSONGarbageCollectionStatusEnum = "cancelling"
	RunGarbageCollection201ApplicationJSONGarbageCollectionStatusEnumFailed                      RunGarbageCollection201ApplicationJSONGarbageCollectionStatusEnum = "failed"
	RunGarbageCollection201ApplicationJSONGarbageCollectionStatusEnumSucceeded                   RunGarbageCollection201ApplicationJSONGarbageCollectionStatusEnum = "succeeded"
	RunGarbageCollection201ApplicationJSONGarbageCollectionStatusEnumCancelled                   RunGarbageCollection201ApplicationJSONGarbageCollectionStatusEnum = "cancelled"
)

type RunGarbageCollection201ApplicationJSONGarbageCollection struct {
	BlobsDeleted *int64                                                             `json:"blobs_deleted"`
	CreatedAt    *time.Time                                                         `json:"created_at"`
	FreedBytes   *int64                                                             `json:"freed_bytes"`
	RegistryName *string                                                            `json:"registry_name"`
	Status       *RunGarbageCollection201ApplicationJSONGarbageCollectionStatusEnum `json:"status"`
	UpdatedAt    *time.Time                                                         `json:"updated_at"`
	UUID         *string                                                            `json:"uuid"`
}

type RunGarbageCollection201ApplicationJSON struct {
	GarbageCollection *RunGarbageCollection201ApplicationJSONGarbageCollection `json:"garbage_collection"`
}

type RunGarbageCollection401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type RunGarbageCollectionResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	RunGarbageCollection201ApplicationJSONObject              *RunGarbageCollection201ApplicationJSON
	RunGarbageCollection401ApplicationJSONObject              *RunGarbageCollection401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
