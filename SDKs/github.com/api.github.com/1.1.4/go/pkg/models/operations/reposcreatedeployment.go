package operations

import (
	"openapi/pkg/models/shared"
)

type ReposCreateDeploymentPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposCreateDeploymentRequestBody struct {
	AutoMerge             *bool        `json:"auto_merge,omitempty"`
	CreatedAt             *string      `json:"created_at,omitempty"`
	Description           *string      `json:"description,omitempty"`
	Environment           *string      `json:"environment,omitempty"`
	Payload               *interface{} `json:"payload,omitempty"`
	ProductionEnvironment *bool        `json:"production_environment,omitempty"`
	Ref                   string       `json:"ref"`
	RequiredContexts      []string     `json:"required_contexts,omitempty"`
	Task                  *string      `json:"task,omitempty"`
	TransientEnvironment  *bool        `json:"transient_environment,omitempty"`
}

type ReposCreateDeploymentRequest struct {
	PathParams ReposCreateDeploymentPathParams
	Request    *ReposCreateDeploymentRequestBody `request:"mediaType=application/json"`
}

type ReposCreateDeployment202ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type ReposCreateDeployment409ApplicationJSON struct {
	DocumentationURL *string `json:"documentation_url,omitempty"`
	Message          *string `json:"message,omitempty"`
}

type ReposCreateDeploymentResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	Deployment                                    *shared.Deployment
	ReposCreateDeployment202ApplicationJSONObject *ReposCreateDeployment202ApplicationJSON
	ReposCreateDeployment409ApplicationJSONObject *ReposCreateDeployment409ApplicationJSON
	ValidationError                               *shared.ValidationError
}
