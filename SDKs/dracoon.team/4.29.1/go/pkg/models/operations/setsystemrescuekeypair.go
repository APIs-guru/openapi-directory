package operations

import (
	"openapi/pkg/models/shared"
)

type SetSystemRescueKeyPairHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type SetSystemRescueKeyPairRequest struct {
	Headers SetSystemRescueKeyPairHeaders
	Request shared.UserKeyPairContainer `request:"mediaType=application/json"`
}

type SetSystemRescueKeyPairResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
