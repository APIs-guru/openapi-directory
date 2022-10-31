package operations

import (
"openapi/pkg/models/shared")

type ReposGetPullRequestReviewProtectionPathParams struct {
    Branch string `pathParam:"style=simple,explode=false,name=branch"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposGetPullRequestReviewProtectionRequest struct {
    PathParams ReposGetPullRequestReviewProtectionPathParams 
    
}

type ReposGetPullRequestReviewProtectionResponse struct {
    ContentType string 
    StatusCode int64 
    ProtectedBranchPullRequestReview *shared.ProtectedBranchPullRequestReview 
    
}

