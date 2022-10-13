package operations

import (
	"openapi/pkg/models/shared"
)

type CreateVolumeSnapshotPathParams struct {
	VolumeID string `pathParam:"style=simple,explode=false,name=volume_id"`
}

type CreateVolumeSnapshotRequest struct {
	PathParams CreateVolumeSnapshotPathParams
	Request    interface{} `request:"mediaType=application/json"`
}

type CreateVolumeSnapshot401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type CreateVolumeSnapshotResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	CreateVolumeSnapshot201ApplicationJSONAny                 *interface{}
	CreateVolumeSnapshot401ApplicationJSONObject              *CreateVolumeSnapshot401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
