package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAppRequestBody struct {
	Spec shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec `json:"spec"`
}

type CreateAppRequest struct {
	Request CreateAppRequestBody `request:"mediaType=application/json"`
}

type CreateApp200ApplicationJSON struct {
	App *shared.Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems `json:"app"`
}

type CreateApp401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type CreateAppResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	CreateApp200ApplicationJSONObject                         *CreateApp200ApplicationJSON
	CreateApp401ApplicationJSONObject                         *CreateApp401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
