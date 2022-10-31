package operations



type RegistryDeleteAPISpecPathParams struct {
    API string `pathParam:"style=simple,explode=false,name=api"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    Spec string `pathParam:"style=simple,explode=false,name=spec"`
    Version string `pathParam:"style=simple,explode=false,name=version"`
    
}

type RegistryDeleteAPISpecRequest struct {
    PathParams RegistryDeleteAPISpecPathParams 
    
}

type RegistryDeleteAPISpecResponse struct {
    ContentType string 
    StatusCode int64 
    
}

