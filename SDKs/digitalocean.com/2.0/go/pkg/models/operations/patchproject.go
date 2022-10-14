package operations

import (
	"openapi/pkg/models/shared"
)

type PatchProjectPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=project_id"`
}

type PatchProjectRequest struct {
	PathParams PatchProjectPathParams
	Request    shared.Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItems `request:"mediaType=application/json"`
}

type PatchProject401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type PatchProjectResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	PatchProject200ApplicationJSONAny                         *interface{}
	PatchProject401ApplicationJSONObject                      *PatchProject401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
