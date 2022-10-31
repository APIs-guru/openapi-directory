package operations

import (
	"openapi/pkg/models/shared"
)

type RequestUploadStatusPublicPathParams struct {
	AccessKey string `pathParam:"style=simple,explode=false,name=access_key"`
	UploadID  string `pathParam:"style=simple,explode=false,name=upload_id"`
}

type RequestUploadStatusPublicRequest struct {
	PathParams RequestUploadStatusPublicPathParams
}

type RequestUploadStatusPublicResponse struct {
	ContentType         string
	ErrorResponse       *shared.ErrorResponse
	S3ShareUploadStatus *shared.S3ShareUploadStatus
	StatusCode          int64
}
