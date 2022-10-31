package operations

type CreateRepositoryPipelineKnownHostPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type CreateRepositoryPipelineKnownHostRequest struct {
	PathParams CreateRepositoryPipelineKnownHostPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type CreateRepositoryPipelineKnownHostResponse struct {
	ContentType       string
	Headers           map[string][]string
	StatusCode        int64
	Error             map[string]interface{}
	PipelineKnownHost map[string]interface{}
}
