package operations

import (
	"openapi/pkg/models/shared"
)

type GetFloatingIPActionPathParams struct {
	ActionID   int64  `pathParam:"style=simple,explode=false,name=action_id"`
	FloatingIP string `pathParam:"style=simple,explode=false,name=floating_ip"`
}

type GetFloatingIPActionRequest struct {
	PathParams GetFloatingIPActionPathParams
}

type GetFloatingIPAction401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type GetFloatingIPActionResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetFloatingIPAction200ApplicationJSONAny                  *interface{}
	GetFloatingIPAction401ApplicationJSONObject               *GetFloatingIPAction401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
