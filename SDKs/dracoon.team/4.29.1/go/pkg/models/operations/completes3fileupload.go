package operations

import (
	"openapi/pkg/models/shared"
)

type CompleteS3FileUploadPathParams struct {
	UploadID string `pathParam:"style=simple,explode=false,name=upload_id"`
}

type CompleteS3FileUploadHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type CompleteS3FileUploadRequest struct {
	PathParams CompleteS3FileUploadPathParams
	Headers    CompleteS3FileUploadHeaders
	Request    shared.CompleteS3FileUploadRequest `request:"mediaType=application/json"`
}

type CompleteS3FileUploadResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
