package operations

import (
	"openapi/pkg/models/shared"
)

type ActivityMarkThreadAsReadPathParams struct {
	ThreadID int64 `pathParam:"style=simple,explode=false,name=thread_id"`
}

type ActivityMarkThreadAsReadRequest struct {
	PathParams ActivityMarkThreadAsReadPathParams
}

type ActivityMarkThreadAsReadResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
}
