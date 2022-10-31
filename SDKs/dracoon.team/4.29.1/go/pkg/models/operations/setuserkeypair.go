package operations

import (
	"openapi/pkg/models/shared"
)

type SetUserKeyPairHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type SetUserKeyPairRequest struct {
	Headers SetUserKeyPairHeaders
	Request shared.UserKeyPairContainer `request:"mediaType=application/json"`
}

type SetUserKeyPairResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
