package operations



type RegistryDeleteAPISpecRevisionPathParams struct {
    API string `pathParam:"style=simple,explode=false,name=api"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    Spec string `pathParam:"style=simple,explode=false,name=spec"`
    Version string `pathParam:"style=simple,explode=false,name=version"`
    
}

type RegistryDeleteAPISpecRevisionRequest struct {
    PathParams RegistryDeleteAPISpecRevisionPathParams 
    
}

type RegistryDeleteAPISpecRevisionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

