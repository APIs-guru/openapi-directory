package operations

type GetDeploymentForRepositoryPathParams struct {
	DeploymentUUID string `pathParam:"style=simple,explode=false,name=deployment_uuid"`
	RepoSlug       string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace      string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetDeploymentForRepositoryRequest struct {
	PathParams GetDeploymentForRepositoryPathParams
}

type GetDeploymentForRepositoryResponse struct {
	ContentType string
	StatusCode  int64
	Deployment  map[string]interface{}
	Error       map[string]interface{}
}
