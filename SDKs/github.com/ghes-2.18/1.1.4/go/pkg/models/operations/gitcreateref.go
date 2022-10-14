package operations

import (
	"openapi/pkg/models/shared"
)

type GitCreateRefPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type GitCreateRefRequestBody struct {
	Key *string `json:"key,omitempty"`
	Ref string  `json:"ref"`
	Sha string  `json:"sha"`
}

type GitCreateRefRequest struct {
	PathParams GitCreateRefPathParams
	Request    *GitCreateRefRequestBody `request:"mediaType=application/json"`
}

type GitCreateRefResponse struct {
	ContentType     string
	Headers         map[string][]string
	StatusCode      int64
	GitRef          *shared.GitRef
	ValidationError *shared.ValidationError
}
