package operations

import (
	"openapi/pkg/models/shared"
)

type GetSnapshotPathParams struct {
	SnapshotID interface{} `pathParam:"style=simple,explode=false,name=snapshot_id"`
}

type GetSnapshotRequest struct {
	PathParams GetSnapshotPathParams
}

type GetSnapshot401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type GetSnapshotResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetSnapshot200ApplicationJSONAny                          *interface{}
	GetSnapshot401ApplicationJSONObject                       *GetSnapshot401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
