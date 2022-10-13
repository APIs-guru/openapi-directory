package operations

import (
	"openapi/pkg/models/shared"
)

type CreateOAuthClientHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type CreateOAuthClientRequest struct {
	Headers CreateOAuthClientHeaders
	Request shared.CreateOAuthClientRequest `request:"mediaType=application/json"`
}

type CreateOAuthClientResponse struct {
	ContentType                              string
	ErrorResponse                            *shared.ErrorResponse
	OAuthClient                              *shared.OAuthClient
	StatusCode                               int64
	CreateOAuthClient400ApplicationJSONOneOf *interface{}
}
