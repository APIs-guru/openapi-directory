package operations

import (
	"openapi/pkg/models/shared"
)

type RequestUploadStatusFilesPathParams struct {
	UploadID string `pathParam:"style=simple,explode=false,name=upload_id"`
}

type RequestUploadStatusFilesHeaders struct {
	XSdsAuthToken  *string      `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
}

type RequestUploadStatusFilesRequest struct {
	PathParams RequestUploadStatusFilesPathParams
	Headers    RequestUploadStatusFilesHeaders
}

type RequestUploadStatusFilesResponse struct {
	ContentType        string
	ErrorResponse      *shared.ErrorResponse
	S3FileUploadStatus *shared.S3FileUploadStatus
	StatusCode         int64
}
