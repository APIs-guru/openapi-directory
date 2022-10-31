package operations

import (
"openapi/pkg/models/shared")

type ReposGetCommitCommentPathParams struct {
    CommentID int64 `pathParam:"style=simple,explode=false,name=comment_id"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposGetCommitCommentRequest struct {
    PathParams ReposGetCommitCommentPathParams 
    
}

type ReposGetCommitCommentResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    CommitComment *shared.CommitComment 
    
}

