package operations

import (
"openapi/pkg/models/shared")

type ReposDeleteCommitCommentPathParams struct {
    CommentID int64 `pathParam:"style=simple,explode=false,name=comment_id"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposDeleteCommitCommentRequest struct {
    PathParams ReposDeleteCommitCommentPathParams 
    
}

type ReposDeleteCommitCommentResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    
}

