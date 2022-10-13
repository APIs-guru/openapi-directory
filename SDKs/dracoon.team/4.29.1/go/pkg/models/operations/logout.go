package operations

import (
	"openapi/pkg/models/shared"
)

type LogoutQueryParams struct {
	Everywhere *bool `queryParam:"style=form,explode=true,name=everywhere"`
}

type LogoutHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type LogoutRequest struct {
	QueryParams LogoutQueryParams
	Headers     LogoutHeaders
}

type LogoutResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
