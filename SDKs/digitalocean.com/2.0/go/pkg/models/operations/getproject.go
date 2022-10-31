package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=project_id"`
}

type GetProjectRequest struct {
	PathParams GetProjectPathParams
}

type GetProject401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type GetProjectResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetProject200ApplicationJSONAny                           *interface{}
	GetProject401ApplicationJSONObject                        *GetProject401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
