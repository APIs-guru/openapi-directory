package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveOAuthAuthorizationsPathParams struct {
	ClientID string `pathParam:"style=simple,explode=false,name=client_id"`
}

type RemoveOAuthAuthorizationsHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type RemoveOAuthAuthorizationsRequest struct {
	PathParams RemoveOAuthAuthorizationsPathParams
	Headers    RemoveOAuthAuthorizationsHeaders
}

type RemoveOAuthAuthorizationsResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
