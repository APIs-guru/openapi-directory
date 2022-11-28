package operations

import (
	"openapi/pkg/models/shared"
)

type ReposDeleteFilePathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Path  string `pathParam:"style=simple,explode=false,name=path"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

// ReposDeleteFileRequestBodyAuthor
// object containing information about the author.
type ReposDeleteFileRequestBodyAuthor struct {
	Email *string `json:"email,omitempty"`
	Name  *string `json:"name,omitempty"`
}

// ReposDeleteFileRequestBodyCommitter
// object containing information about the committer.
type ReposDeleteFileRequestBodyCommitter struct {
	Email *string `json:"email,omitempty"`
	Name  *string `json:"name,omitempty"`
}

type ReposDeleteFileRequestBody struct {
	Author    *ReposDeleteFileRequestBodyAuthor    `json:"author,omitempty"`
	Branch    *string                              `json:"branch,omitempty"`
	Committer *ReposDeleteFileRequestBodyCommitter `json:"committer,omitempty"`
	Message   string                               `json:"message"`
	Sha       string                               `json:"sha"`
}

type ReposDeleteFile503ApplicationJSON struct {
	Code             *string `json:"code,omitempty"`
	DocumentationURL *string `json:"documentation_url,omitempty"`
	Message          *string `json:"message,omitempty"`
}

type ReposDeleteFileRequest struct {
	PathParams ReposDeleteFilePathParams
	Request    *ReposDeleteFileRequestBody `request:"mediaType=application/json"`
}

type ReposDeleteFileResponse struct {
	ContentType                             string
	StatusCode                              int64
	BasicError                              *shared.BasicError
	FileCommit                              *shared.FileCommit
	ReposDeleteFile503ApplicationJSONObject *ReposDeleteFile503ApplicationJSON
	ValidationError                         *shared.ValidationError
}
