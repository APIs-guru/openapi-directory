package operations

type DeleteEnvironmentForRepositoryPathParams struct {
	EnvironmentUUID string `pathParam:"style=simple,explode=false,name=environment_uuid"`
	RepoSlug        string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace       string `pathParam:"style=simple,explode=false,name=workspace"`
}

type DeleteEnvironmentForRepositoryRequest struct {
	PathParams DeleteEnvironmentForRepositoryPathParams
}

type DeleteEnvironmentForRepositoryResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
