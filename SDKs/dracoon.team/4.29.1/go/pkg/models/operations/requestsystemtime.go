package operations

import (
	"openapi/pkg/models/shared"
)

type RequestSystemTimeHeaders struct {
	XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
}

type RequestSystemTimeRequest struct {
	Headers RequestSystemTimeHeaders
}

type RequestSystemTimeResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	SdsServerTime *shared.SdsServerTime
	StatusCode    int64
}
