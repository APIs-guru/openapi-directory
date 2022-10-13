package operations

import (
	"openapi/pkg/models/shared"
)

type CancelFileUploadPathParams struct {
	UploadID string `pathParam:"style=simple,explode=false,name=upload_id"`
}

type CancelFileUploadHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type CancelFileUploadRequest struct {
	PathParams CancelFileUploadPathParams
	Headers    CancelFileUploadHeaders
}

type CancelFileUploadResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
