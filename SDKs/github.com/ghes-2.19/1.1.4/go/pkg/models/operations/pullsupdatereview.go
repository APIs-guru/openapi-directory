package operations

import (
	"openapi/pkg/models/shared"
)

type PullsUpdateReviewPathParams struct {
	Owner      string `pathParam:"style=simple,explode=false,name=owner"`
	PullNumber int64  `pathParam:"style=simple,explode=false,name=pull_number"`
	Repo       string `pathParam:"style=simple,explode=false,name=repo"`
	ReviewID   int64  `pathParam:"style=simple,explode=false,name=review_id"`
}

type PullsUpdateReviewRequestBody struct {
	Body string `json:"body"`
}

type PullsUpdateReviewRequest struct {
	PathParams PullsUpdateReviewPathParams
	Request    *PullsUpdateReviewRequestBody `request:"mediaType=application/json"`
}

type PullsUpdateReviewResponse struct {
	ContentType           string
	StatusCode            int64
	PullRequestReview     *shared.PullRequestReview
	ValidationErrorSimple *shared.ValidationErrorSimple
}
