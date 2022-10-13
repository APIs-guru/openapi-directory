package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoryPipelineCachesPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoryPipelineCachesRequest struct {
	PathParams GetRepositoryPipelineCachesPathParams
}

type GetRepositoryPipelineCachesResponse struct {
	ContentType             string
	StatusCode              int64
	Error                   map[string]interface{}
	PaginatedPipelineCaches *shared.PaginatedPipelineCaches
}
