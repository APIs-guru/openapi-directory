package operations

import (
	"openapi/pkg/models/shared"
)

type RequestSystemDefaultsInfoHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type RequestSystemDefaultsInfoRequest struct {
	Headers RequestSystemDefaultsInfoHeaders
}

type RequestSystemDefaultsInfoResponse struct {
	ContentType    string
	ErrorResponse  *shared.ErrorResponse
	StatusCode     int64
	SystemDefaults *shared.SystemDefaults
}
