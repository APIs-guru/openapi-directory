package operations

type GetRepositoryPipelineKnownHostPathParams struct {
	KnownHostUUID string `pathParam:"style=simple,explode=false,name=known_host_uuid"`
	RepoSlug      string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace     string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoryPipelineKnownHostRequest struct {
	PathParams GetRepositoryPipelineKnownHostPathParams
}

type GetRepositoryPipelineKnownHostResponse struct {
	ContentType       string
	StatusCode        int64
	Error             map[string]interface{}
	PipelineKnownHost map[string]interface{}
}
