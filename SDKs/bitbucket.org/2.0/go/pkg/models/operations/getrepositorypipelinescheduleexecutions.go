package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoryPipelineScheduleExecutionsPathParams struct {
	RepoSlug     string `pathParam:"style=simple,explode=false,name=repo_slug"`
	ScheduleUUID string `pathParam:"style=simple,explode=false,name=schedule_uuid"`
	Workspace    string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoryPipelineScheduleExecutionsRequest struct {
	PathParams GetRepositoryPipelineScheduleExecutionsPathParams
}

type GetRepositoryPipelineScheduleExecutionsResponse struct {
	ContentType                         string
	StatusCode                          int64
	Error                               map[string]interface{}
	PaginatedPipelineScheduleExecutions *shared.PaginatedPipelineScheduleExecutions
}
