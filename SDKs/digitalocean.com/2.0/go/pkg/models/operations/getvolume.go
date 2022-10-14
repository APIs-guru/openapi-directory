package operations

import (
	"openapi/pkg/models/shared"
)

type GetVolumePathParams struct {
	VolumeID string `pathParam:"style=simple,explode=false,name=volume_id"`
}

type GetVolumeRequest struct {
	PathParams GetVolumePathParams
}

type GetVolume401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type GetVolumeResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetVolume200ApplicationJSONAny                            *interface{}
	GetVolume401ApplicationJSONObject                         *GetVolume401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
