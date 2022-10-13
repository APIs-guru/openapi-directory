package operations

import (
	"openapi/pkg/models/shared"
)

type GetMessageCommentReactionsIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetMessageCommentReactionsIDRequest struct {
	PathParams GetMessageCommentReactionsIDPathParams
}

type GetMessageCommentReactionsIDResponse struct {
	ContentType                  string
	MessageCommentReactionEntity *shared.MessageCommentReactionEntity
	StatusCode                   int64
}
