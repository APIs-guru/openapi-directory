package operations

import (
"openapi/pkg/models/shared")

type PullsCreateReviewCommentAlternativePathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    PullNumber int64 `pathParam:"style=simple,explode=false,name=pull_number"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type PullsCreateReviewCommentAlternativeRequestBody struct {
    Body string `json:"body"`
    InReplyTo *int64 `json:"in_reply_to,omitempty"`
    
}

type PullsCreateReviewCommentAlternativeRequest struct {
    PathParams PullsCreateReviewCommentAlternativePathParams 
    Request *PullsCreateReviewCommentAlternativeRequestBody `request:"mediaType=application/json"`
    
}

type PullsCreateReviewCommentAlternativeResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    LegacyReviewComment *shared.LegacyReviewComment 
    
}

