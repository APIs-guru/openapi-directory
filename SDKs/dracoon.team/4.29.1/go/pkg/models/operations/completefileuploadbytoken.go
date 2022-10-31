package operations

import (
	"openapi/pkg/models/shared"
)

type CompleteFileUploadByTokenPathParams struct {
	Token string `pathParam:"style=simple,explode=false,name=token"`
}

type CompleteFileUploadByTokenHeaders struct {
	XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
}

type CompleteFileUploadByTokenRequest struct {
	PathParams CompleteFileUploadByTokenPathParams
	Headers    CompleteFileUploadByTokenHeaders
	Request    shared.CompleteUploadRequest `request:"mediaType=application/json"`
}

type CompleteFileUploadByTokenResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	Node          *shared.Node
	StatusCode    int64
}
