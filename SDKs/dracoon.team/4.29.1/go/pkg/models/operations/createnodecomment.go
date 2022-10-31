package operations

import (
	"openapi/pkg/models/shared"
)

type CreateNodeCommentPathParams struct {
	NodeID int64 `pathParam:"style=simple,explode=false,name=node_id"`
}

type CreateNodeCommentHeaders struct {
	XSdsAuthToken  *string      `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
}

type CreateNodeCommentRequest struct {
	PathParams CreateNodeCommentPathParams
	Headers    CreateNodeCommentHeaders
	Request    shared.CreateNodeCommentRequest `request:"mediaType=application/json"`
}

type CreateNodeCommentResponse struct {
	Comment       *shared.Comment
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
