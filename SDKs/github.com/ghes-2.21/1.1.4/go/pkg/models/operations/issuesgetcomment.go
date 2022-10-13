package operations

import (
	"openapi/pkg/models/shared"
)

type IssuesGetCommentPathParams struct {
	CommentID int64  `pathParam:"style=simple,explode=false,name=comment_id"`
	Owner     string `pathParam:"style=simple,explode=false,name=owner"`
	Repo      string `pathParam:"style=simple,explode=false,name=repo"`
}

type IssuesGetCommentRequest struct {
	PathParams IssuesGetCommentPathParams
}

type IssuesGetCommentResponse struct {
	ContentType  string
	StatusCode   int64
	BasicError   *shared.BasicError
	IssueComment *shared.IssueComment
}
