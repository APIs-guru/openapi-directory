package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTokenHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateTokenRequestBody struct {
	ClientID     string   `json:"clientId"`
	ClientSecret string   `json:"clientSecret"`
	Code         *string  `json:"code"`
	DeviceCode   string   `json:"deviceCode"`
	GrantType    string   `json:"grantType"`
	RedirectURI  *string  `json:"redirectUri"`
	RefreshToken *string  `json:"refreshToken"`
	Scope        []string `json:"scope"`
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
