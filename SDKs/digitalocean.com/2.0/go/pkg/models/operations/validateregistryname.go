package operations

import (
	"openapi/pkg/models/shared"
)

type ValidateRegistryNameRequestBody struct {
	Name string `json:"name"`
}

type ValidateRegistryNameRequest struct {
	Request ValidateRegistryNameRequestBody `request:"mediaType=application/json"`
}

type ValidateRegistryName401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ValidateRegistryNameResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ValidateRegistryName401ApplicationJSONObject              *ValidateRegistryName401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
