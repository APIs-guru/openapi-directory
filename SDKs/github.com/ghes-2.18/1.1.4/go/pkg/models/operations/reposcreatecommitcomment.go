package operations

import (
	"openapi/pkg/models/shared"
)

type ReposCreateCommitCommentPathParams struct {
	CommitSha string `pathParam:"style=simple,explode=false,name=commit_sha"`
	Owner     string `pathParam:"style=simple,explode=false,name=owner"`
	Repo      string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposCreateCommitCommentRequestBody struct {
	Body     string  `json:"body"`
	Line     *int64  `json:"line,omitempty"`
	Path     *string `json:"path,omitempty"`
	Position *int64  `json:"position,omitempty"`
}

type ReposCreateCommitCommentRequest struct {
	PathParams ReposCreateCommitCommentPathParams
	Request    *ReposCreateCommitCommentRequestBody `request:"mediaType=application/json"`
}

type ReposCreateCommitCommentResponse struct {
	ContentType     string
	Headers         map[string][]string
	StatusCode      int64
	BasicError      *shared.BasicError
	CommitComment   *shared.CommitComment
	ValidationError *shared.ValidationError
}
