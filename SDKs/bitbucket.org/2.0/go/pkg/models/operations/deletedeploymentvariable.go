package operations



type DeleteDeploymentVariablePathParams struct {
    EnvironmentUUID string `pathParam:"style=simple,explode=false,name=environment_uuid"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    VariableUUID string `pathParam:"style=simple,explode=false,name=variable_uuid"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type DeleteDeploymentVariableRequest struct {
    PathParams DeleteDeploymentVariablePathParams 
    
}

type DeleteDeploymentVariableResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    
}

