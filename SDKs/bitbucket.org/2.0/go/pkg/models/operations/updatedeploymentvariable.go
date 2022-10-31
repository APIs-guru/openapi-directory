package operations

type UpdateDeploymentVariablePathParams struct {
	EnvironmentUUID string `pathParam:"style=simple,explode=false,name=environment_uuid"`
	RepoSlug        string `pathParam:"style=simple,explode=false,name=repo_slug"`
	VariableUUID    string `pathParam:"style=simple,explode=false,name=variable_uuid"`
	Workspace       string `pathParam:"style=simple,explode=false,name=workspace"`
}

type UpdateDeploymentVariableRequest struct {
	PathParams UpdateDeploymentVariablePathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type UpdateDeploymentVariableResponse struct {
	ContentType        string
	StatusCode         int64
	DeploymentVariable map[string]interface{}
	Error              map[string]interface{}
}
