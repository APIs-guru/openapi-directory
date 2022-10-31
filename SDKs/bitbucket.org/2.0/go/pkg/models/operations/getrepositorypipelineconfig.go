package operations

type GetRepositoryPipelineConfigPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoryPipelineConfigRequest struct {
	PathParams GetRepositoryPipelineConfigPathParams
}

type GetRepositoryPipelineConfigResponse struct {
	ContentType     string
	StatusCode      int64
	PipelinesConfig map[string]interface{}
}
