package operations

type GetRepositoryPipelineSchedulePathParams struct {
	RepoSlug     string `pathParam:"style=simple,explode=false,name=repo_slug"`
	ScheduleUUID string `pathParam:"style=simple,explode=false,name=schedule_uuid"`
	Workspace    string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoryPipelineScheduleRequest struct {
	PathParams GetRepositoryPipelineSchedulePathParams
}

type GetRepositoryPipelineScheduleResponse struct {
	ContentType      string
	StatusCode       int64
	Error            map[string]interface{}
	PipelineSchedule map[string]interface{}
}
