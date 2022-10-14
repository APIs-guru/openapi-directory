package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveRegistryRequest struct {
	Request *shared.Onev21kubernetes1registryPostRequestBodyContentApplication1jsonSchema `request:"mediaType=application/json"`
}

type RemoveRegistry401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type RemoveRegistryResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	RemoveRegistry401ApplicationJSONObject                    *RemoveRegistry401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
