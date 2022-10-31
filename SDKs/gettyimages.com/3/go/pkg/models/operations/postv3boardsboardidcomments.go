package operations

import (
	"openapi/pkg/models/shared"
)

type PostV3BoardsBoardIDCommentsPathParams struct {
	BoardID string `pathParam:"style=simple,explode=false,name=board_id"`
}

type PostV3BoardsBoardIDCommentsRequest struct {
	PathParams PostV3BoardsBoardIDCommentsPathParams
	Request    *shared.CommentRequest `request:"mediaType=application/json"`
}

type PostV3BoardsBoardIDCommentsResponse struct {
	CommentCreated *shared.CommentCreated
	ContentType    string
	StatusCode     int64
}
