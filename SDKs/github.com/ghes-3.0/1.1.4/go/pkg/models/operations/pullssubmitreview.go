package operations

import (
	"openapi/pkg/models/shared"
)

type PullsSubmitReviewPathParams struct {
	Owner      string `pathParam:"style=simple,explode=false,name=owner"`
	PullNumber int64  `pathParam:"style=simple,explode=false,name=pull_number"`
	Repo       string `pathParam:"style=simple,explode=false,name=repo"`
	ReviewID   int64  `pathParam:"style=simple,explode=false,name=review_id"`
}

type PullsSubmitReviewRequestBodyEventEnum string

const (
	PullsSubmitReviewRequestBodyEventEnumApprove        PullsSubmitReviewRequestBodyEventEnum = "APPROVE"
	PullsSubmitReviewRequestBodyEventEnumRequestChanges PullsSubmitReviewRequestBodyEventEnum = "REQUEST_CHANGES"
	PullsSubmitReviewRequestBodyEventEnumComment        PullsSubmitReviewRequestBodyEventEnum = "COMMENT"
)

type PullsSubmitReviewRequestBody struct {
	Body  *string                               `json:"body"`
	Event PullsSubmitReviewRequestBodyEventEnum `json:"event"`
}

type PullsSubmitReviewRequest struct {
	PathParams PullsSubmitReviewPathParams
	Request    *PullsSubmitReviewRequestBody `request:"mediaType=application/json"`
}

type PullsSubmitReviewResponse struct {
	ContentType           string
	StatusCode            int64
	BasicError            *shared.BasicError
	PullRequestReview     *shared.PullRequestReview
	ValidationErrorSimple *shared.ValidationErrorSimple
}
