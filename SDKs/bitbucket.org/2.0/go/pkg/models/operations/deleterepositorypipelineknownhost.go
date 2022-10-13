package operations

type DeleteRepositoryPipelineKnownHostPathParams struct {
	KnownHostUUID string `pathParam:"style=simple,explode=false,name=known_host_uuid"`
	RepoSlug      string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace     string `pathParam:"style=simple,explode=false,name=workspace"`
}

type DeleteRepositoryPipelineKnownHostRequest struct {
	PathParams DeleteRepositoryPipelineKnownHostPathParams
}

type DeleteRepositoryPipelineKnownHostResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
