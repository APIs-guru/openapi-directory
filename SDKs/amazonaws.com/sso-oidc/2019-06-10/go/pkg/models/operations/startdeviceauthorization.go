package operations

import (
	"openapi/pkg/models/shared"
)

type StartDeviceAuthorizationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type StartDeviceAuthorizationRequestBody struct {
	ClientID     string `json:"clientId"`
	ClientSecret string `json:"clientSecret"`
	StartURL     string `json:"startUrl"`
}

type StartDeviceAuthorizationRequest struct {
	Headers StartDeviceAuthorizationHeaders
	Request StartDeviceAuthorizationRequestBody `request:"mediaType=application/json"`
}

type StartDeviceAuthorizationResponse struct {
	ContentType                      string
	InternalServerException          *interface{}
	InvalidClientException           *interface{}
	InvalidRequestException          *interface{}
	SlowDownException                *interface{}
	StartDeviceAuthorizationResponse *shared.StartDeviceAuthorizationResponse
	StatusCode                       int64
	UnauthorizedClientException      *interface{}
}
