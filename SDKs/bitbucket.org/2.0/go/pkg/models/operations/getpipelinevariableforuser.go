package operations

type GetPipelineVariableForUserPathParams struct {
	SelectedUser string `pathParam:"style=simple,explode=false,name=selected_user"`
	VariableUUID string `pathParam:"style=simple,explode=false,name=variable_uuid"`
}

type GetPipelineVariableForUserRequest struct {
	PathParams GetPipelineVariableForUserPathParams
}

type GetPipelineVariableForUserResponse struct {
	ContentType      string
	StatusCode       int64
	Error            map[string]interface{}
	PipelineVariable map[string]interface{}
}
