package operations

import (
	"openapi/pkg/models/shared"
)

type GitGetTagPathParams struct {
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
	TagSha string `pathParam:"style=simple,explode=false,name=tag_sha"`
}

type GitGetTagRequest struct {
	PathParams GitGetTagPathParams
}

type GitGetTagResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
	GitTag      *shared.GitTag
}
