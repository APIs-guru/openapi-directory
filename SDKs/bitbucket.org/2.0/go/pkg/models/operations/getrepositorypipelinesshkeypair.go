package operations

type GetRepositoryPipelineSSHKeyPairPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoryPipelineSSHKeyPairRequest struct {
	PathParams GetRepositoryPipelineSSHKeyPairPathParams
}

type GetRepositoryPipelineSSHKeyPairResponse struct {
	ContentType        string
	StatusCode         int64
	Error              map[string]interface{}
	PipelineSSHKeyPair map[string]interface{}
}
