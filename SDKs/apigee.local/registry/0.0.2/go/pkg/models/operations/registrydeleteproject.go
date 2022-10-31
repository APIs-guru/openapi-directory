package operations



type RegistryDeleteProjectPathParams struct {
    Project string `pathParam:"style=simple,explode=false,name=project"`
    
}

type RegistryDeleteProjectRequest struct {
    PathParams RegistryDeleteProjectPathParams 
    
}

type RegistryDeleteProjectResponse struct {
    ContentType string 
    StatusCode int64 
    
}

