package operations

import (
	"openapi/pkg/models/shared"
)

type CompleteFileUploadPathParams struct {
	UploadID string `pathParam:"style=simple,explode=false,name=upload_id"`
}

type CompleteFileUploadHeaders struct {
	XSdsAuthToken  *string      `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
}

type CompleteFileUploadRequest struct {
	PathParams CompleteFileUploadPathParams
	Headers    CompleteFileUploadHeaders
	Request    shared.CompleteUploadRequest `request:"mediaType=application/json"`
}

type CompleteFileUploadResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	Node          *shared.Node
	StatusCode    int64
}
