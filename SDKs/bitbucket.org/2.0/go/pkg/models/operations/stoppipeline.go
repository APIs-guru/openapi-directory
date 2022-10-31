package operations

type StopPipelinePathParams struct {
	PipelineUUID string `pathParam:"style=simple,explode=false,name=pipeline_uuid"`
	RepoSlug     string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace    string `pathParam:"style=simple,explode=false,name=workspace"`
}

type StopPipelineRequest struct {
	PathParams StopPipelinePathParams
}

type StopPipelineResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
