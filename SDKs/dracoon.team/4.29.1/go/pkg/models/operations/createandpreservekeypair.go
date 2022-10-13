package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAndPreserveKeyPairHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type CreateAndPreserveKeyPairRequest struct {
	Headers CreateAndPreserveKeyPairHeaders
	Request shared.CreateKeyPairRequest `request:"mediaType=application/json"`
}

type CreateAndPreserveKeyPairResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
