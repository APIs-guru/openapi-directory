package operations

import (
	"openapi/pkg/models/shared"
)

type RequestSystemDefaultsHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type RequestSystemDefaultsRequest struct {
	Headers RequestSystemDefaultsHeaders
}

type RequestSystemDefaultsResponse struct {
	ContentType    string
	ErrorResponse  *shared.ErrorResponse
	StatusCode     int64
	SystemDefaults *shared.SystemDefaults
}
