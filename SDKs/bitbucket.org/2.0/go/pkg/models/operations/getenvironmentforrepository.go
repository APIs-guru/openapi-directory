package operations

type GetEnvironmentForRepositoryPathParams struct {
	EnvironmentUUID string `pathParam:"style=simple,explode=false,name=environment_uuid"`
	RepoSlug        string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace       string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetEnvironmentForRepositoryRequest struct {
	PathParams GetEnvironmentForRepositoryPathParams
}

type GetEnvironmentForRepositoryResponse struct {
	ContentType           string
	StatusCode            int64
	DeploymentEnvironment map[string]interface{}
	Error                 map[string]interface{}
}
