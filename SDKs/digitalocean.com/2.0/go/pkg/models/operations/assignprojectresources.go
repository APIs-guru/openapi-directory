package operations

import (
	"openapi/pkg/models/shared"
)

type AssignProjectResourcesPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=project_id"`
}

type AssignProjectResourcesRequestBody struct {
	Resources []string `json:"resources"`
}

type AssignProjectResourcesRequest struct {
	PathParams AssignProjectResourcesPathParams
	Request    AssignProjectResourcesRequestBody `request:"mediaType=application/json"`
}

type AssignProjectResources200ApplicationJSON struct {
	Resources []shared.Onev21projects1Percent7BprojectIDPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItems `json:"resources"`
}

type AssignProjectResources401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type AssignProjectResourcesResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	AssignProjectResources200ApplicationJSONObject            *AssignProjectResources200ApplicationJSON
	AssignProjectResources401ApplicationJSONObject            *AssignProjectResources401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
