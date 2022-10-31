package operations

import (
	"openapi/pkg/models/shared"
)

type ReposMergePathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposMergeRequestBody struct {
	Base          string  `json:"base"`
	CommitMessage *string `json:"commit_message,omitempty"`
	Head          string  `json:"head"`
}

type ReposMergeRequest struct {
	PathParams ReposMergePathParams
	Request    *ReposMergeRequestBody `request:"mediaType=application/json"`
}

type ReposMergeResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	Commit          *shared.Commit
	ValidationError *shared.ValidationError
}
