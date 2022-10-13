package operations

import (
	"openapi/pkg/models/shared"
)

type ReposCreateDeploymentPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposCreateDeploymentRequestBody struct {
	AutoMerge             *bool        `json:"auto_merge"`
	CreatedAt             *string      `json:"created_at"`
	Description           *string      `json:"description"`
	Environment           *string      `json:"environment"`
	Payload               *interface{} `json:"payload"`
	ProductionEnvironment *bool        `json:"production_environment"`
	Ref                   string       `json:"ref"`
	RequiredContexts      []string     `json:"required_contexts"`
	Task                  *string      `json:"task"`
	TransientEnvironment  *bool        `json:"transient_environment"`
}

type ReposCreateDeploymentRequest struct {
	PathParams ReposCreateDeploymentPathParams
	Request    *ReposCreateDeploymentRequestBody `request:"mediaType=application/json"`
}

type ReposCreateDeployment202ApplicationJSON struct {
	Message *string `json:"message"`
}

type ReposCreateDeployment409ApplicationJSON struct {
	DocumentationURL *string `json:"documentation_url"`
	Message          *string `json:"message"`
}

type ReposCreateDeploymentResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	Deployment                                    *shared.Deployment
	ReposCreateDeployment202ApplicationJSONObject *ReposCreateDeployment202ApplicationJSON
	ReposCreateDeployment409ApplicationJSONObject *ReposCreateDeployment409ApplicationJSON
	ValidationError                               *shared.ValidationError
}
