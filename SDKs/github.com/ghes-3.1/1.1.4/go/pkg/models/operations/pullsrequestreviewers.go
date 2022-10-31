package operations

import (
"openapi/pkg/models/shared")

type PullsRequestReviewersPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    PullNumber int64 `pathParam:"style=simple,explode=false,name=pull_number"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type PullsRequestReviewersRequestBody struct {
    Reviewers []string `json:"reviewers,omitempty"`
    TeamReviewers []string `json:"team_reviewers,omitempty"`
    
}

type PullsRequestReviewersRequest struct {
    PathParams PullsRequestReviewersPathParams 
    Request *PullsRequestReviewersRequestBody `request:"mediaType=application/json"`
    
}

type PullsRequestReviewersResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    PullRequestSimple *shared.PullRequestSimple 
    
}

