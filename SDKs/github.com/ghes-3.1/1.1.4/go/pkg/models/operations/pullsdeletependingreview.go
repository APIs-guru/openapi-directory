package operations

import (
"openapi/pkg/models/shared")

type PullsDeletePendingReviewPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    PullNumber int64 `pathParam:"style=simple,explode=false,name=pull_number"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    ReviewID int64 `pathParam:"style=simple,explode=false,name=review_id"`
    
}

type PullsDeletePendingReviewRequest struct {
    PathParams PullsDeletePendingReviewPathParams 
    
}

type PullsDeletePendingReviewResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    PullRequestReview *shared.PullRequestReview 
    ValidationErrorSimple *shared.ValidationErrorSimple 
    
}

