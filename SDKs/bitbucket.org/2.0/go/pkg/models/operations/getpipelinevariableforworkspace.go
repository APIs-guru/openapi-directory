package operations



type GetPipelineVariableForWorkspacePathParams struct {
    VariableUUID string `pathParam:"style=simple,explode=false,name=variable_uuid"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetPipelineVariableForWorkspaceRequest struct {
    PathParams GetPipelineVariableForWorkspacePathParams 
    
}

type GetPipelineVariableForWorkspaceResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    PipelineVariable map[string]interface{} 
    
}

