package operations

type UpdatePipelineVariableForWorkspacePathParams struct {
	VariableUUID string `pathParam:"style=simple,explode=false,name=variable_uuid"`
	Workspace    string `pathParam:"style=simple,explode=false,name=workspace"`
}

type UpdatePipelineVariableForWorkspaceRequest struct {
	PathParams UpdatePipelineVariableForWorkspacePathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type UpdatePipelineVariableForWorkspaceResponse struct {
	ContentType      string
	StatusCode       int64
	Error            map[string]interface{}
	PipelineVariable map[string]interface{}
}
