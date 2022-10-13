package operations

import (
	"openapi/pkg/models/shared"
)

type RequestLogOperationsQueryParams struct {
	IsDeprecated *bool `queryParam:"style=form,explode=true,name=is_deprecated"`
}

type RequestLogOperationsHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type RequestLogOperationsRequest struct {
	QueryParams RequestLogOperationsQueryParams
	Headers     RequestLogOperationsHeaders
}

type RequestLogOperationsResponse struct {
	ContentType      string
	ErrorResponse    *shared.ErrorResponse
	LogOperationList *shared.LogOperationList
	StatusCode       int64
}
