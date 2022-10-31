package operations

import (
"openapi/pkg/models/shared")

type GetMessageCommentReactionsQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    MessageCommentID int32 `queryParam:"style=form,explode=true,name=message_comment_id"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    UserID *int32 `queryParam:"style=form,explode=true,name=user_id"`
    
}

type GetMessageCommentReactionsRequest struct {
    QueryParams GetMessageCommentReactionsQueryParams 
    
}

type GetMessageCommentReactionsResponse struct {
    ContentType string 
    MessageCommentReactionEntities []shared.MessageCommentReactionEntity 
    StatusCode int64 
    
}

