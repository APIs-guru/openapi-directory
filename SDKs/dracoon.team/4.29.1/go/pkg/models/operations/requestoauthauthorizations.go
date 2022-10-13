package operations

import (
	"openapi/pkg/models/shared"
)

type RequestOAuthAuthorizationsQueryParams struct {
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
	Sort   *string `queryParam:"style=form,explode=true,name=sort"`
}

type RequestOAuthAuthorizationsHeaders struct {
	XSdsAuthToken  *string      `header:"name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"name=X-Sds-Date-Format"`
}

type RequestOAuthAuthorizationsRequest struct {
	QueryParams RequestOAuthAuthorizationsQueryParams
	Headers     RequestOAuthAuthorizationsHeaders
}

type RequestOAuthAuthorizationsResponse struct {
	ContentType         string
	ErrorResponse       *shared.ErrorResponse
	OAuthAuthorizations []shared.OAuthAuthorization
	StatusCode          int64
}
