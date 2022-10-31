package operations

import (
"openapi/pkg/models/shared")

type PullsDeleteReviewCommentPathParams struct {
    CommentID int64 `pathParam:"style=simple,explode=false,name=comment_id"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type PullsDeleteReviewCommentRequest struct {
    PathParams PullsDeleteReviewCommentPathParams 
    
}

type PullsDeleteReviewCommentResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    
}

