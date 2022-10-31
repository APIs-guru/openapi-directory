package operations



type CreateDeploymentVariablePathParams struct {
    EnvironmentUUID string `pathParam:"style=simple,explode=false,name=environment_uuid"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type CreateDeploymentVariableQueryParams struct {
    VariableUUID string `queryParam:"style=form,explode=true,name=variable_uuid"`
    
}

type CreateDeploymentVariableRequest struct {
    PathParams CreateDeploymentVariablePathParams 
    QueryParams CreateDeploymentVariableQueryParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type CreateDeploymentVariableResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    DeploymentVariable map[string]interface{} 
    Error map[string]interface{} 
    
}

