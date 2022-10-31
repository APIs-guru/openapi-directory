package operations

import (
"openapi/pkg/models/shared")

type PostMessageCommentReactionsRequestBody struct {
    Emoji string `multipartForm:"name=emoji"`
    UserID *int32 `multipartForm:"name=user_id"`
    
}

type PostMessageCommentReactionsRequest struct {
    Request *PostMessageCommentReactionsRequestBody `request:"mediaType=multipart/form-data"`
    
}

type PostMessageCommentReactionsResponse struct {
    ContentType string 
    MessageCommentReactionEntity *shared.MessageCommentReactionEntity 
    StatusCode int64 
    
}

