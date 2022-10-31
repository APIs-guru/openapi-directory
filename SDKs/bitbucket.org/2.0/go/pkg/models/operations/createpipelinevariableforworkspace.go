package operations

type CreatePipelineVariableForWorkspacePathParams struct {
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type CreatePipelineVariableForWorkspaceRequest struct {
	PathParams CreatePipelineVariableForWorkspacePathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type CreatePipelineVariableForWorkspaceResponse struct {
	ContentType      string
	Headers          map[string][]string
	StatusCode       int64
	Error            map[string]interface{}
	PipelineVariable map[string]interface{}
}
