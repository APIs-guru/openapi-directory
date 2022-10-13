package operations

type UpdateRepositoryPipelineVariablePathParams struct {
	RepoSlug     string `pathParam:"style=simple,explode=false,name=repo_slug"`
	VariableUUID string `pathParam:"style=simple,explode=false,name=variable_uuid"`
	Workspace    string `pathParam:"style=simple,explode=false,name=workspace"`
}

type UpdateRepositoryPipelineVariableRequest struct {
	PathParams UpdateRepositoryPipelineVariablePathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type UpdateRepositoryPipelineVariableResponse struct {
	ContentType      string
	StatusCode       int64
	Error            map[string]interface{}
	PipelineVariable map[string]interface{}
}
