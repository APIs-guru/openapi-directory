package operations

import (
	"openapi/pkg/models/shared"
)

type PostCancelDeploymentPathParams struct {
	AppID        string `pathParam:"style=simple,explode=false,name=app_id"`
	DeploymentID string `pathParam:"style=simple,explode=false,name=deployment_id"`
}

type PostCancelDeploymentRequest struct {
	PathParams PostCancelDeploymentPathParams
}

type PostCancelDeployment401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type PostCancelDeploymentResponse struct {
	ContentType                                                                                 string
	Headers                                                                                     map[string][]string
	StatusCode                                                                                  int64
	PostCancelDeployment401ApplicationJSONObject                                                *PostCancelDeployment401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema                                   *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
	Onev21apps1Percent7BappIDPercent7D1deploymentsPostResponses200ContentApplication1jsonSchema *shared.Onev21apps1Percent7BappIDPercent7D1deploymentsPostResponses200ContentApplication1jsonSchema
}
