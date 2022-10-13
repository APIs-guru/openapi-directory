package operations

type UpdateRepositoryPipelineKeyPairPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type UpdateRepositoryPipelineKeyPairRequest struct {
	PathParams UpdateRepositoryPipelineKeyPairPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type UpdateRepositoryPipelineKeyPairResponse struct {
	ContentType        string
	StatusCode         int64
	Error              map[string]interface{}
	PipelineSSHKeyPair map[string]interface{}
}
