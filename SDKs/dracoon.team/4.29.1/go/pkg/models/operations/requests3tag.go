package operations

import (
	"openapi/pkg/models/shared"
)

type RequestS3TagPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type RequestS3TagHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type RequestS3TagRequest struct {
	PathParams RequestS3TagPathParams
	Headers    RequestS3TagHeaders
}

type RequestS3TagResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	S3Tag         *shared.S3Tag
	StatusCode    int64
}
