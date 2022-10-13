package operations

import (
	"openapi/pkg/models/shared"
)

type GetV3BoardsBoardIDCommentsPathParams struct {
	BoardID string `pathParam:"style=simple,explode=false,name=board_id"`
}

type GetV3BoardsBoardIDCommentsRequest struct {
	PathParams GetV3BoardsBoardIDCommentsPathParams
}

type GetV3BoardsBoardIDCommentsResponse struct {
	CommentsList *shared.CommentsList
	ContentType  string
	StatusCode   int64
}
