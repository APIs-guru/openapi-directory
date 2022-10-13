package operations

import (
	"openapi/pkg/models/shared"
)

type RequestOAuthClientsQueryParams struct {
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
	Sort   *string `queryParam:"style=form,explode=true,name=sort"`
}

type RequestOAuthClientsHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type RequestOAuthClientsRequest struct {
	QueryParams RequestOAuthClientsQueryParams
	Headers     RequestOAuthClientsHeaders
}

type RequestOAuthClientsResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	OAuthClients  []shared.OAuthClient
	StatusCode    int64
}
