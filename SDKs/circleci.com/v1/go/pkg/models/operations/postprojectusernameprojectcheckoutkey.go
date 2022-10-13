package operations

import (
	"openapi/pkg/models/shared"
)

type PostProjectUsernameProjectCheckoutKeyPathParams struct {
	Project  string `pathParam:"style=simple,explode=false,name=project"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type PostProjectUsernameProjectCheckoutKeyRequestBodyEnum string

const (
	PostProjectUsernameProjectCheckoutKeyRequestBodyEnumDeployKey     PostProjectUsernameProjectCheckoutKeyRequestBodyEnum = "deploy-key"
	PostProjectUsernameProjectCheckoutKeyRequestBodyEnumGithubUserKey PostProjectUsernameProjectCheckoutKeyRequestBodyEnum = "github-user-key"
)

type PostProjectUsernameProjectCheckoutKeyRequest struct {
	PathParams PostProjectUsernameProjectCheckoutKeyPathParams
	Request    *PostProjectUsernameProjectCheckoutKeyRequestBodyEnum `request:"mediaType=application/json"`
}

type PostProjectUsernameProjectCheckoutKeyResponse struct {
	ContentType string
	Key         *shared.Key
	StatusCode  int64
}
