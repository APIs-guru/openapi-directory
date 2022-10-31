package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTokenHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateTokenRequestBody struct {
	ClientID     string   `json:"clientId"`
	ClientSecret string   `json:"clientSecret"`
	Code         *string  `json:"code,omitempty"`
	DeviceCode   string   `json:"deviceCode"`
	GrantType    string   `json:"grantType"`
	RedirectURI  *string  `json:"redirectUri,omitempty"`
	RefreshToken *string  `json:"refreshToken,omitempty"`
	Scope        []string `json:"scope,omitempty"`
}

type CreateTokenRequest struct {
	Headers CreateTokenHeaders
	Request CreateTokenRequestBody `request:"mediaType=application/json"`
}

type CreateTokenResponse struct {
	AccessDeniedException         *interface{}
	AuthorizationPendingException *interface{}
	ContentType                   string
	CreateTokenResponse           *shared.CreateTokenResponse
	ExpiredTokenException         *interface{}
	InternalServerException       *interface{}
	InvalidClientException        *interface{}
	InvalidGrantException         *interface{}
	InvalidRequestException       *interface{}
	InvalidScopeException         *interface{}
	SlowDownException             *interface{}
	StatusCode                    int64
	UnauthorizedClientException   *interface{}
	UnsupportedGrantTypeException *interface{}
}
