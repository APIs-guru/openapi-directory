package operations

import (
	"openapi/pkg/models/shared"
)

type EnableCustomerEncryptionHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type EnableCustomerEncryptionRequest struct {
	Headers EnableCustomerEncryptionHeaders
	Request shared.EnableCustomerEncryptionRequest `request:"mediaType=application/json"`
}

type EnableCustomerEncryptionResponse struct {
	ContentType   string
	CustomerData  *shared.CustomerData
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
