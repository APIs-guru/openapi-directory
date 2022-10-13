package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoryPipelineSchedulesPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoryPipelineSchedulesRequest struct {
	PathParams GetRepositoryPipelineSchedulesPathParams
}

type GetRepositoryPipelineSchedulesResponse struct {
	ContentType                string
	StatusCode                 int64
	Error                      map[string]interface{}
	PaginatedPipelineSchedules *shared.PaginatedPipelineSchedules
}
