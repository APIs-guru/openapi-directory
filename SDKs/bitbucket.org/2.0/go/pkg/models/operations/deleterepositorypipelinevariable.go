package operations

type DeleteRepositoryPipelineVariablePathParams struct {
	RepoSlug     string `pathParam:"style=simple,explode=false,name=repo_slug"`
	VariableUUID string `pathParam:"style=simple,explode=false,name=variable_uuid"`
	Workspace    string `pathParam:"style=simple,explode=false,name=workspace"`
}

type DeleteRepositoryPipelineVariableRequest struct {
	PathParams DeleteRepositoryPipelineVariablePathParams
}

type DeleteRepositoryPipelineVariableResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
