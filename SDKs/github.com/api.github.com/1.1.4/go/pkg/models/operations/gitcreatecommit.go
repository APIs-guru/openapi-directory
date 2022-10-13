package operations

import (
	"openapi/pkg/models/shared"
)

type GitCreateCommitPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type GitCreateCommitRequestBodyAuthor struct {
	Date  *string `json:"date"`
	Email *string `json:"email"`
	Name  *string `json:"name"`
}

type GitCreateCommitRequestBodyCommitter struct {
	Date  *string `json:"date"`
	Email *string `json:"email"`
	Name  *string `json:"name"`
}

type GitCreateCommitRequestBody struct {
	Author    *GitCreateCommitRequestBodyAuthor    `json:"author"`
	Committer *GitCreateCommitRequestBodyCommitter `json:"committer"`
	Message   string                               `json:"message"`
	Parents   []string                             `json:"parents"`
	Signature *string                              `json:"signature"`
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
