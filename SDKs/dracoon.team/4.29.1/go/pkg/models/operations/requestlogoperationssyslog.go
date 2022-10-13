package operations

import (
	"openapi/pkg/models/shared"
)

type RequestLogOperationsSyslogQueryParams struct {
	IsDeprecated *bool `queryParam:"style=form,explode=true,name=is_deprecated"`
}

type RequestLogOperationsSyslogHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type RequestLogOperationsSyslogRequest struct {
	QueryParams RequestLogOperationsSyslogQueryParams
	Headers     RequestLogOperationsSyslogHeaders
}

type RequestLogOperationsSyslogResponse struct {
	ContentType      string
	ErrorResponse    *shared.ErrorResponse
	LogOperationList *shared.LogOperationList
	StatusCode       int64
}
