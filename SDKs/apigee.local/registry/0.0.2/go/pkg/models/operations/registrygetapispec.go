package operations



type RegistryGetAPISpecPathParams struct {
    API string `pathParam:"style=simple,explode=false,name=api"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    Spec string `pathParam:"style=simple,explode=false,name=spec"`
    Version string `pathParam:"style=simple,explode=false,name=version"`
    
}

type RegistryGetAPISpecRequest struct {
    PathParams RegistryGetAPISpecPathParams 
    
}

type RegistryGetAPISpecResponse struct {
    APISpec *interface{} 
    ContentType string 
    StatusCode int64 
    
}

