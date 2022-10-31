package operations

import (
"openapi/pkg/models/shared")

type GistsDeleteCommentPathParams struct {
    CommentID int64 `pathParam:"style=simple,explode=false,name=comment_id"`
    GistID string `pathParam:"style=simple,explode=false,name=gist_id"`
    
}

type GistsDeleteCommentRequest struct {
    PathParams GistsDeleteCommentPathParams 
    
}

type GistsDeleteCommentResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    
}

