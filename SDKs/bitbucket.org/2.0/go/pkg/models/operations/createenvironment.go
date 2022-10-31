package operations



type CreateEnvironmentPathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type CreateEnvironmentRequest struct {
    PathParams CreateEnvironmentPathParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type CreateEnvironmentResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    DeploymentEnvironment map[string]interface{} 
    Error map[string]interface{} 
    
}

