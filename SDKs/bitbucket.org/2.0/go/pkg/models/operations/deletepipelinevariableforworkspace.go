package operations



type DeletePipelineVariableForWorkspacePathParams struct {
    VariableUUID string `pathParam:"style=simple,explode=false,name=variable_uuid"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type DeletePipelineVariableForWorkspaceRequest struct {
    PathParams DeletePipelineVariableForWorkspacePathParams 
    
}

type DeletePipelineVariableForWorkspaceResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    
}

