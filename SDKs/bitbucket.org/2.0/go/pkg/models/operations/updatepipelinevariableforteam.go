package operations



type UpdatePipelineVariableForTeamPathParams struct {
    Username string `pathParam:"style=simple,explode=false,name=username"`
    VariableUUID string `pathParam:"style=simple,explode=false,name=variable_uuid"`
    
}

type UpdatePipelineVariableForTeamRequest struct {
    PathParams UpdatePipelineVariableForTeamPathParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type UpdatePipelineVariableForTeamResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    PipelineVariable map[string]interface{} 
    
}

