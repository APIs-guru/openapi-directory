package operations

type GetPipelineStepForRepositoryPathParams struct {
	PipelineUUID string `pathParam:"style=simple,explode=false,name=pipeline_uuid"`
	RepoSlug     string `pathParam:"style=simple,explode=false,name=repo_slug"`
	StepUUID     string `pathParam:"style=simple,explode=false,name=step_uuid"`
	Workspace    string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetPipelineStepForRepositoryRequest struct {
	PathParams GetPipelineStepForRepositoryPathParams
}

type GetPipelineStepForRepositoryResponse struct {
	ContentType  string
	StatusCode   int64
	Error        map[string]interface{}
	PipelineStep map[string]interface{}
}
