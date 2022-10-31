package operations

import (
"openapi/pkg/models/shared")

type ReposUpdateCommitCommentPathParams struct {
    CommentID int64 `pathParam:"style=simple,explode=false,name=comment_id"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposUpdateCommitCommentRequestBody struct {
    Body string `json:"body"`
    
}

type ReposUpdateCommitCommentRequest struct {
    PathParams ReposUpdateCommitCommentPathParams 
    Request *ReposUpdateCommitCommentRequestBody `request:"mediaType=application/json"`
    
}

type ReposUpdateCommitCommentResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    CommitComment *shared.CommitComment 
    
}

