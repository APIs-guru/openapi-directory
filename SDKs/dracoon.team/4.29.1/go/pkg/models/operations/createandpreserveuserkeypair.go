package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAndPreserveUserKeyPairHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type CreateAndPreserveUserKeyPairRequest struct {
	Headers CreateAndPreserveUserKeyPairHeaders
	Request shared.CreateKeyPairRequest `request:"mediaType=application/json"`
}

type CreateAndPreserveUserKeyPairResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
