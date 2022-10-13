package operations

type UpdateRepositoryPipelineSchedulePathParams struct {
	RepoSlug     string `pathParam:"style=simple,explode=false,name=repo_slug"`
	ScheduleUUID string `pathParam:"style=simple,explode=false,name=schedule_uuid"`
	Workspace    string `pathParam:"style=simple,explode=false,name=workspace"`
}

type UpdateRepositoryPipelineScheduleRequest struct {
	PathParams UpdateRepositoryPipelineSchedulePathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type UpdateRepositoryPipelineScheduleResponse struct {
	ContentType      string
	StatusCode       int64
	Error            map[string]interface{}
	PipelineSchedule map[string]interface{}
}
