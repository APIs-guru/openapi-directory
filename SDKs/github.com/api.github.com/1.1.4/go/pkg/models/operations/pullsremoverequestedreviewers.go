package operations

import (
	"openapi/pkg/models/shared"
)

type PullsRemoveRequestedReviewersPathParams struct {
	Owner      string `pathParam:"style=simple,explode=false,name=owner"`
	PullNumber int64  `pathParam:"style=simple,explode=false,name=pull_number"`
	Repo       string `pathParam:"style=simple,explode=false,name=repo"`
}

type PullsRemoveRequestedReviewersRequestBody struct {
	Reviewers     []string `json:"reviewers"`
	TeamReviewers []string `json:"team_reviewers,omitempty"`
}

type PullsRemoveRequestedReviewersRequest struct {
	PathParams PullsRemoveRequestedReviewersPathParams
	Request    *PullsRemoveRequestedReviewersRequestBody `request:"mediaType=application/json"`
}

type PullsRemoveRequestedReviewersResponse struct {
	ContentType     string
	StatusCode      int64
	ValidationError *shared.ValidationError
}
