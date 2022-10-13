package operations

import (
	"openapi/pkg/models/shared"
)

type PullsCreateReviewPathParams struct {
	Owner      string `pathParam:"style=simple,explode=false,name=owner"`
	PullNumber int64  `pathParam:"style=simple,explode=false,name=pull_number"`
	Repo       string `pathParam:"style=simple,explode=false,name=repo"`
}

type PullsCreateReviewRequestBodyComments struct {
	Body      string  `json:"body"`
	Line      *int64  `json:"line"`
	Path      string  `json:"path"`
	Position  *int64  `json:"position"`
	Side      *string `json:"side"`
	StartLine *int64  `json:"start_line"`
	StartSide *string `json:"start_side"`
}

type PullsCreateReviewRequestBodyEventEnum string

const (
	PullsCreateReviewRequestBodyEventEnumApprove        PullsCreateReviewRequestBodyEventEnum = "APPROVE"
	PullsCreateReviewRequestBodyEventEnumRequestChanges PullsCreateReviewRequestBodyEventEnum = "REQUEST_CHANGES"
	PullsCreateReviewRequestBodyEventEnumComment        PullsCreateReviewRequestBodyEventEnum = "COMMENT"
)

type PullsCreateReviewRequestBody struct {
	Body     *string                                `json:"body"`
	Comments []PullsCreateReviewRequestBodyComments `json:"comments"`
	CommitID *string                                `json:"commit_id"`
	Event    *PullsCreateReviewRequestBodyEventEnum `json:"event"`
}

type PullsCreateReviewRequest struct {
	PathParams PullsCreateReviewPathParams
	Request    *PullsCreateReviewRequestBody `request:"mediaType=application/json"`
}

type PullsCreateReviewResponse struct {
	ContentType           string
	StatusCode            int64
	BasicError            *shared.BasicError
	PullRequestReview     *shared.PullRequestReview
	ValidationErrorSimple *shared.ValidationErrorSimple
}
