package operations

import (
	"openapi/pkg/models/shared"
)

type GetRegistry401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type GetRegistryResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetRegistry200ApplicationJSONAny                          *interface{}
	GetRegistry401ApplicationJSONObject                       *GetRegistry401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
