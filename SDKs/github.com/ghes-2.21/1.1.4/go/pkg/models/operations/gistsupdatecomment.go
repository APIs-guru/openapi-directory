package operations

import (
"openapi/pkg/models/shared")

type GistsUpdateCommentPathParams struct {
    CommentID int64 `pathParam:"style=simple,explode=false,name=comment_id"`
    GistID string `pathParam:"style=simple,explode=false,name=gist_id"`
    
}

type GistsUpdateCommentRequestBody struct {
    Body string `json:"body"`
    
}

type GistsUpdateCommentRequest struct {
    PathParams GistsUpdateCommentPathParams 
    Request *GistsUpdateCommentRequestBody `request:"mediaType=application/json"`
    
}

type GistsUpdateCommentResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    GistComment *shared.GistComment 
    
}

