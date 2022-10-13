package operations

import (
	"openapi/pkg/models/shared"
)

type GetDeploymentPathParams struct {
	AppID        string `pathParam:"style=simple,explode=false,name=app_id"`
	DeploymentID string `pathParam:"style=simple,explode=false,name=deployment_id"`
}

type GetDeploymentRequest struct {
	PathParams GetDeploymentPathParams
}

type GetDeployment401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type GetDeploymentResponse struct {
	ContentType                                                                                 string
	Headers                                                                                     map[string][]string
	StatusCode                                                                                  int64
	GetDeployment401ApplicationJSONObject                                                       *GetDeployment401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema                                   *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
	Onev21apps1Percent7BappIDPercent7D1deploymentsPostResponses200ContentApplication1jsonSchema *shared.Onev21apps1Percent7BappIDPercent7D1deploymentsPostResponses200ContentApplication1jsonSchema
}
