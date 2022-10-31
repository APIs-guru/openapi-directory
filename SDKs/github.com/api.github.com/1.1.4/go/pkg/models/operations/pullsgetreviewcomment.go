package operations

import (
	"openapi/pkg/models/shared"
)

type PullsGetReviewCommentPathParams struct {
	CommentID int64  `pathParam:"style=simple,explode=false,name=comment_id"`
	Owner     string `pathParam:"style=simple,explode=false,name=owner"`
	Repo      string `pathParam:"style=simple,explode=false,name=repo"`
}

type PullsGetReviewCommentRequest struct {
	PathParams PullsGetReviewCommentPathParams
}

type PullsGetReviewCommentResponse struct {
	ContentType              string
	StatusCode               int64
	BasicError               *shared.BasicError
	PullRequestReviewComment *shared.PullRequestReviewComment
}
