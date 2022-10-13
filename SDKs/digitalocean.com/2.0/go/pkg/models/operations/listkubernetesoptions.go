package operations

import (
	"openapi/pkg/models/shared"
)

type ListKubernetesOptions200ApplicationJSON struct {
	Options *interface{} `json:"options"`
}

type ListKubernetesOptions401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ListKubernetesOptionsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListKubernetesOptions200ApplicationJSONObject             *ListKubernetesOptions200ApplicationJSON
	ListKubernetesOptions401ApplicationJSONObject             *ListKubernetesOptions401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
