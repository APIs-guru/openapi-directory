package operations



type UpdatePipelineVariableForUserPathParams struct {
    SelectedUser string `pathParam:"style=simple,explode=false,name=selected_user"`
    VariableUUID string `pathParam:"style=simple,explode=false,name=variable_uuid"`
    
}

type UpdatePipelineVariableForUserRequest struct {
    PathParams UpdatePipelineVariableForUserPathParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type UpdatePipelineVariableForUserResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    PipelineVariable map[string]interface{} 
    
}

