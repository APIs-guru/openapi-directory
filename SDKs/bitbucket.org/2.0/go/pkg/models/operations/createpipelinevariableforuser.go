package operations



type CreatePipelineVariableForUserPathParams struct {
    SelectedUser string `pathParam:"style=simple,explode=false,name=selected_user"`
    
}

type CreatePipelineVariableForUserRequest struct {
    PathParams CreatePipelineVariableForUserPathParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type CreatePipelineVariableForUserResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    Error map[string]interface{} 
    PipelineVariable map[string]interface{} 
    
}

