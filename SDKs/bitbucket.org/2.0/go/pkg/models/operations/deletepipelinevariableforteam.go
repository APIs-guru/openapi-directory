package operations



type DeletePipelineVariableForTeamPathParams struct {
    Username string `pathParam:"style=simple,explode=false,name=username"`
    VariableUUID string `pathParam:"style=simple,explode=false,name=variable_uuid"`
    
}

type DeletePipelineVariableForTeamRequest struct {
    PathParams DeletePipelineVariableForTeamPathParams 
    
}

type DeletePipelineVariableForTeamResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    
}

