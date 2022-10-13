package operations

import (
	"openapi/pkg/models/shared"
)

type PullsUpdateReviewCommentPathParams struct {
	CommentID int64  `pathParam:"style=simple,explode=false,name=comment_id"`
	Owner     string `pathParam:"style=simple,explode=false,name=owner"`
	Repo      string `pathParam:"style=simple,explode=false,name=repo"`
}

type PullsUpdateReviewCommentRequestBody struct {
	Body string `json:"body"`
}

type PullsUpdateReviewCommentRequest struct {
	PathParams PullsUpdateReviewCommentPathParams
	Request    *PullsUpdateReviewCommentRequestBody `request:"mediaType=application/json"`
}

type PullsUpdateReviewCommentResponse struct {
	ContentType              string
	StatusCode               int64
	PullRequestReviewComment *shared.PullRequestReviewComment
}
