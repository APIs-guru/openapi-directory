package operations

type DeleteRepositoryPipelineKeyPairPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type DeleteRepositoryPipelineKeyPairRequest struct {
	PathParams DeleteRepositoryPipelineKeyPairPathParams
}

type DeleteRepositoryPipelineKeyPairResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
