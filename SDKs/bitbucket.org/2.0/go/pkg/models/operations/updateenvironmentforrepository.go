package operations

type UpdateEnvironmentForRepositoryPathParams struct {
	EnvironmentUUID string `pathParam:"style=simple,explode=false,name=environment_uuid"`
	RepoSlug        string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace       string `pathParam:"style=simple,explode=false,name=workspace"`
}

type UpdateEnvironmentForRepositoryRequest struct {
	PathParams UpdateEnvironmentForRepositoryPathParams
}

type UpdateEnvironmentForRepositoryResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
