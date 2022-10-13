package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveOAuthClientPathParams struct {
	ClientID string `pathParam:"style=simple,explode=false,name=client_id"`
}

type RemoveOAuthClientHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type RemoveOAuthClientRequest struct {
	PathParams RemoveOAuthClientPathParams
	Headers    RemoveOAuthClientHeaders
}

type RemoveOAuthClientResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
