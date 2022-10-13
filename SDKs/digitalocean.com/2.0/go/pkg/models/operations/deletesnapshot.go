package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSnapshotPathParams struct {
	SnapshotID interface{} `pathParam:"style=simple,explode=false,name=snapshot_id"`
}

type DeleteSnapshotRequest struct {
	PathParams DeleteSnapshotPathParams
}

type DeleteSnapshot401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type DeleteSnapshotResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	DeleteSnapshot401ApplicationJSONObject                    *DeleteSnapshot401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
