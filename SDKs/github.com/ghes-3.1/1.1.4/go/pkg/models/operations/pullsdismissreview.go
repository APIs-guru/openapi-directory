package operations

import (
	"openapi/pkg/models/shared"
)

type PullsDismissReviewPathParams struct {
	Owner      string `pathParam:"style=simple,explode=false,name=owner"`
	PullNumber int64  `pathParam:"style=simple,explode=false,name=pull_number"`
	Repo       string `pathParam:"style=simple,explode=false,name=repo"`
	ReviewID   int64  `pathParam:"style=simple,explode=false,name=review_id"`
}

type PullsDismissReviewRequestBody struct {
	Event   *string `json:"event"`
	Message string  `json:"message"`
}

type PullsDismissReviewRequest struct {
	PathParams PullsDismissReviewPathParams
	Request    *PullsDismissReviewRequestBody `request:"mediaType=application/json"`
}

type PullsDismissReviewResponse struct {
	ContentType           string
	StatusCode            int64
	BasicError            *shared.BasicError
	PullRequestReview     *shared.PullRequestReview
	ValidationErrorSimple *shared.ValidationErrorSimple
}
