package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateS3ConfigHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type UpdateS3ConfigRequest struct {
	Headers UpdateS3ConfigHeaders
	Request shared.S3ConfigUpdateRequest `request:"mediaType=application/json"`
}

type UpdateS3ConfigResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	S3Config      *shared.S3Config
	StatusCode    int64
}
