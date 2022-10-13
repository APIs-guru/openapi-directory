package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateOAuthClientPathParams struct {
	ClientID string `pathParam:"style=simple,explode=false,name=client_id"`
}

type UpdateOAuthClientHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type UpdateOAuthClientRequest struct {
	PathParams UpdateOAuthClientPathParams
	Headers    UpdateOAuthClientHeaders
	Request    shared.UpdateOAuthClientRequest `request:"mediaType=application/json"`
}

type UpdateOAuthClientResponse struct {
	ContentType                              string
	ErrorResponse                            *shared.ErrorResponse
	OAuthClient                              *shared.OAuthClient
	StatusCode                               int64
	UpdateOAuthClient400ApplicationJSONOneOf *interface{}
}
