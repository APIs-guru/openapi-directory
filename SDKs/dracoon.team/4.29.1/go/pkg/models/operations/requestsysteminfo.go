package operations

import (
	"openapi/pkg/models/shared"
)

type RequestSystemInfoQueryParams struct {
	IsEnabled *bool `queryParam:"style=form,explode=true,name=is_enabled"`
}

type RequestSystemInfoRequest struct {
	QueryParams RequestSystemInfoQueryParams
}

type RequestSystemInfoResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
	SystemInfo    *shared.SystemInfo
}
