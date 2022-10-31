package operations

type UpdateRepositoryPipelineConfigPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type UpdateRepositoryPipelineConfigRequest struct {
	PathParams UpdateRepositoryPipelineConfigPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type UpdateRepositoryPipelineConfigResponse struct {
	ContentType     string
	StatusCode      int64
	PipelinesConfig map[string]interface{}
}
