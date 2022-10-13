package operations

import (
	"openapi/pkg/models/shared"
)

type RequestS3TagListHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type RequestS3TagListRequest struct {
	Headers RequestS3TagListHeaders
}

type RequestS3TagListResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	S3TagList     *shared.S3TagList
	StatusCode    int64
}
