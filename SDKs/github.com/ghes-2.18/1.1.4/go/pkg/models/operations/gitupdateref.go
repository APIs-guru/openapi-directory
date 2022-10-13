package operations

import (
	"openapi/pkg/models/shared"
)

type GitUpdateRefPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Ref   string `pathParam:"style=simple,explode=false,name=ref"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type GitUpdateRefRequestBody struct {
	Force *bool  `json:"force"`
	Sha   string `json:"sha"`
}

type GitUpdateRefRequest struct {
	PathParams GitUpdateRefPathParams
	Request    *GitUpdateRefRequestBody `request:"mediaType=application/json"`
}

type GitUpdateRefResponse struct {
	ContentType     string
	StatusCode      int64
	GitRef          *shared.GitRef
	ValidationError *shared.ValidationError
}
