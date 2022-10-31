package operations

import (
"openapi/pkg/models/shared")

type PullsCreateReplyForReviewCommentPathParams struct {
    CommentID int64 `pathParam:"style=simple,explode=false,name=comment_id"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    PullNumber int64 `pathParam:"style=simple,explode=false,name=pull_number"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type PullsCreateReplyForReviewCommentRequestBody struct {
    Body string `json:"body"`
    
}

type PullsCreateReplyForReviewCommentRequest struct {
    PathParams PullsCreateReplyForReviewCommentPathParams 
    Request *PullsCreateReplyForReviewCommentRequestBody `request:"mediaType=application/json"`
    
}

type PullsCreateReplyForReviewCommentResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    PullRequestReviewComment *shared.PullRequestReviewComment 
    
}

