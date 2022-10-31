package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFileUploadChannelHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type CreateFileUploadChannelRequest struct {
	Headers CreateFileUploadChannelHeaders
	Request shared.CreateFileUploadRequest `request:"mediaType=application/json"`
}

type CreateFileUploadChannelResponse struct {
	ContentType              string
	CreateFileUploadResponse *shared.CreateFileUploadResponse
	ErrorResponse            *shared.ErrorResponse
	StatusCode               int64
}
