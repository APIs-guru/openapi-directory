package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAppPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateAppRequestBody struct {
	Spec shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec `json:"spec"`
}

type UpdateAppRequest struct {
	PathParams UpdateAppPathParams
	Request    UpdateAppRequestBody `request:"mediaType=application/json"`
}

type UpdateApp401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type UpdateAppResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	UpdateApp401ApplicationJSONObject                         *UpdateApp401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
	Onev21appsPostResponses200ContentApplication1jsonSchema   *shared.Onev21appsPostResponses200ContentApplication1jsonSchema
}
