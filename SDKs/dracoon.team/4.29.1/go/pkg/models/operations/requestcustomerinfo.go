package operations

import (
	"openapi/pkg/models/shared"
)

type RequestCustomerInfoHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type RequestCustomerInfoRequest struct {
	Headers RequestCustomerInfoHeaders
}

type RequestCustomerInfoResponse struct {
	ContentType   string
	CustomerData  *shared.CustomerData
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
