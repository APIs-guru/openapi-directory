package operations



type DeletePipelineVariableForUserPathParams struct {
    SelectedUser string `pathParam:"style=simple,explode=false,name=selected_user"`
    VariableUUID string `pathParam:"style=simple,explode=false,name=variable_uuid"`
    
}

type DeletePipelineVariableForUserRequest struct {
    PathParams DeletePipelineVariableForUserPathParams 
    
}

type DeletePipelineVariableForUserResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    
}

