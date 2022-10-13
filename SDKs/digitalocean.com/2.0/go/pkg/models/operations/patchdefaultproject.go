package operations

import (
	"openapi/pkg/models/shared"
)

type PatchDefaultProjectRequest struct {
	Request shared.Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItems `request:"mediaType=application/json"`
}

type PatchDefaultProject401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type PatchDefaultProjectResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	PatchDefaultProject200ApplicationJSONAny                  *interface{}
	PatchDefaultProject401ApplicationJSONObject               *PatchDefaultProject401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
