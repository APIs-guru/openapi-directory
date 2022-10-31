package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoryPipelineCacheContentURIPathParams struct {
	CacheUUID string `pathParam:"style=simple,explode=false,name=cache_uuid"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoryPipelineCacheContentURIRequest struct {
	PathParams GetRepositoryPipelineCacheContentURIPathParams
}

type GetRepositoryPipelineCacheContentURIResponse struct {
	ContentType             string
	StatusCode              int64
	Error                   map[string]interface{}
	PipelineCacheContentURI *shared.PipelineCacheContentURI
}
