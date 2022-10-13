package operations

import (
	"openapi/pkg/models/shared"
)

type PullsCreateReviewCommentPathParams struct {
	Owner      string `pathParam:"style=simple,explode=false,name=owner"`
	PullNumber int64  `pathParam:"style=simple,explode=false,name=pull_number"`
	Repo       string `pathParam:"style=simple,explode=false,name=repo"`
}

type PullsCreateReviewCommentRequestBodySideEnum string

const (
	PullsCreateReviewCommentRequestBodySideEnumLeft  PullsCreateReviewCommentRequestBodySideEnum = "LEFT"
	PullsCreateReviewCommentRequestBodySideEnumRight PullsCreateReviewCommentRequestBodySideEnum = "RIGHT"
)

type PullsCreateReviewCommentRequestBodyStartSideEnum string

const (
	PullsCreateReviewCommentRequestBodyStartSideEnumLeft  PullsCreateReviewCommentRequestBodyStartSideEnum = "LEFT"
	PullsCreateReviewCommentRequestBodyStartSideEnumRight PullsCreateReviewCommentRequestBodyStartSideEnum = "RIGHT"
	PullsCreateReviewCommentRequestBodyStartSideEnumSide  PullsCreateReviewCommentRequestBodyStartSideEnum = "side"
)

type PullsCreateReviewCommentRequestBody struct {
	Body      string                                            `json:"body"`
	CommitID  *string                                           `json:"commit_id"`
	InReplyTo *int64                                            `json:"in_reply_to"`
	Line      *int64                                            `json:"line"`
	Path      *string                                           `json:"path"`
	Position  *int64                                            `json:"position"`
	Side      *PullsCreateReviewCommentRequestBodySideEnum      `json:"side"`
	StartLine *int64                                            `json:"start_line"`
	StartSide *PullsCreateReviewCommentRequestBodyStartSideEnum `json:"start_side"`
}

type PullsCreateReviewCommentRequest struct {
	PathParams PullsCreateReviewCommentPathParams
	Request    *PullsCreateReviewCommentRequestBody `request:"mediaType=application/json"`
}

type PullsCreateReviewCommentResponse struct {
	ContentType              string
	Headers                  map[string][]string
	StatusCode               int64
	BasicError               *shared.BasicError
	PullRequestReviewComment *shared.PullRequestReviewComment
	ValidationError          *shared.ValidationError
}
