package operations

import (
	"openapi/pkg/models/shared"
)

type GitGetTreePathParams struct {
	Owner   string `pathParam:"style=simple,explode=false,name=owner"`
	Repo    string `pathParam:"style=simple,explode=false,name=repo"`
	TreeSha string `pathParam:"style=simple,explode=false,name=tree_sha"`
}

type GitGetTreeQueryParams struct {
	Recursive *string `queryParam:"style=form,explode=true,name=recursive"`
}

type GitGetTreeRequest struct {
	PathParams  GitGetTreePathParams
	QueryParams GitGetTreeQueryParams
}

type GitGetTreeResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	GitTree         *shared.GitTree
	ValidationError *shared.ValidationError
}
