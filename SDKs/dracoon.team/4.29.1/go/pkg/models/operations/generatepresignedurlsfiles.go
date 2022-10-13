package operations

import (
	"openapi/pkg/models/shared"
)

type GeneratePresignedUrlsFilesPathParams struct {
	UploadID string `pathParam:"style=simple,explode=false,name=upload_id"`
}

type GeneratePresignedUrlsFilesHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type GeneratePresignedUrlsFilesRequest struct {
	PathParams GeneratePresignedUrlsFilesPathParams
	Headers    GeneratePresignedUrlsFilesHeaders
	Request    shared.GeneratePresignedUrlsRequest `request:"mediaType=application/json"`
}

type GeneratePresignedUrlsFilesResponse struct {
	ContentType      string
	ErrorResponse    *shared.ErrorResponse
	PresignedURLList *shared.PresignedURLList
	StatusCode       int64
}
