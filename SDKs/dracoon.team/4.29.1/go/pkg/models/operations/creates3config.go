package operations

import (
	"openapi/pkg/models/shared"
)

type CreateS3ConfigHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type CreateS3ConfigRequest struct {
	Headers CreateS3ConfigHeaders
	Request shared.S3ConfigCreateRequest `request:"mediaType=application/json"`
}

type CreateS3ConfigResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	S3Config      *shared.S3Config
	StatusCode    int64
}
