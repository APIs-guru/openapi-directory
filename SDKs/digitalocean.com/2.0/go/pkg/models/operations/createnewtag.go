package operations

import (
	"openapi/pkg/models/shared"
)

type CreateNewTagRequest struct {
	Request shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItems `request:"mediaType=application/json"`
}

type CreateNewTag400ApplicationJSON struct {
	Error      string   `json:"error"`
	Messages   []string `json:"messages,omitempty"`
	RootCauses []string `json:"root_causes"`
}

type CreateNewTag401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type CreateNewTagResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	CreateNewTag201ApplicationJSONAny                         *interface{}
	CreateNewTag400ApplicationJSONObject                      *CreateNewTag400ApplicationJSON
	CreateNewTag401ApplicationJSONObject                      *CreateNewTag401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
