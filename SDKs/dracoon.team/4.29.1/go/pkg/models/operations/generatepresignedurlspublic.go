package operations

import (
	"openapi/pkg/models/shared"
)

type GeneratePresignedUrlsPublicPathParams struct {
	AccessKey string `pathParam:"style=simple,explode=false,name=access_key"`
	UploadID  string `pathParam:"style=simple,explode=false,name=upload_id"`
}

type GeneratePresignedUrlsPublicHeaders struct {
	XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
}

type GeneratePresignedUrlsPublicRequest struct {
	PathParams GeneratePresignedUrlsPublicPathParams
	Headers    GeneratePresignedUrlsPublicHeaders
	Request    shared.GeneratePresignedUrlsRequest `request:"mediaType=application/json"`
}

type GeneratePresignedUrlsPublicResponse struct {
	ContentType      string
	ErrorResponse    *shared.ErrorResponse
	PresignedURLList *shared.PresignedURLList
	StatusCode       int64
}
