package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GitCreateCommitPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

// GitCreateCommitRequestBodyAuthor
// Information about the author of the commit. By default, the `author` will be the authenticated user and the current date. See the `author` and `committer` object below for details.
type GitCreateCommitRequestBodyAuthor struct {
	Date  *time.Time `json:"date,omitempty"`
	Email string     `json:"email"`
	Name  string     `json:"name"`
}

// GitCreateCommitRequestBodyCommitter
// Information about the person who is making the commit. By default, `committer` will use the information set in `author`. See the `author` and `committer` object below for details.
type GitCreateCommitRequestBodyCommitter struct {
	Date  *time.Time `json:"date,omitempty"`
	Email *string    `json:"email,omitempty"`
	Name  *string    `json:"name,omitempty"`
}

type GitCreateCommitRequestBody struct {
	Author    *GitCreateCommitRequestBodyAuthor    `json:"author,omitempty"`
	Committer *GitCreateCommitRequestBodyCommitter `json:"committer,omitempty"`
	Message   string                               `json:"message"`
	Parents   []string                             `json:"parents,omitempty"`
	Signature *string                              `json:"signature,omitempty"`
	Tree      string                               `json:"tree"`
}

type GitCreateCommitRequest struct {
	PathParams GitCreateCommitPathParams
	Request    *GitCreateCommitRequestBody `request:"mediaType=application/json"`
}

type GitCreateCommitResponse struct {
	ContentType     string
	Headers         map[string][]string
	StatusCode      int64
	BasicError      *shared.BasicError
	GitCommit       *shared.GitCommit
	ValidationError *shared.ValidationError
}
