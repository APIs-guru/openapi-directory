package operations

import (
	"openapi/pkg/models/shared"
)

type GetDropletPathParams struct {
	DropletID int64 `pathParam:"style=simple,explode=false,name=droplet_id"`
}

type GetDropletRequest struct {
	PathParams GetDropletPathParams
}

type GetDroplet401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type GetDropletResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetDroplet200ApplicationJSONAny                           *interface{}
	GetDroplet401ApplicationJSONObject                        *GetDroplet401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
