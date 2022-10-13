package operations

type GetRepositoryPipelineVariablePathParams struct {
	RepoSlug     string `pathParam:"style=simple,explode=false,name=repo_slug"`
	VariableUUID string `pathParam:"style=simple,explode=false,name=variable_uuid"`
	Workspace    string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoryPipelineVariableRequest struct {
	PathParams GetRepositoryPipelineVariablePathParams
}

type GetRepositoryPipelineVariableResponse struct {
	ContentType      string
	StatusCode       int64
	Error            map[string]interface{}
	PipelineVariable map[string]interface{}
}
