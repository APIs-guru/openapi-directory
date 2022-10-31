package operations

import (
	"openapi/pkg/models/shared"
)

type RequestCustomerKeyPairHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type RequestCustomerKeyPairRequest struct {
	Headers RequestCustomerKeyPairHeaders
}

type RequestCustomerKeyPairResponse struct {
	ContentType          string
	ErrorResponse        *shared.ErrorResponse
	StatusCode           int64
	UserKeyPairContainer *shared.UserKeyPairContainer
}
