package operations



type RegistryGetAPIPathParams struct {
    API string `pathParam:"style=simple,explode=false,name=api"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    
}

type RegistryGetAPIRequest struct {
    PathParams RegistryGetAPIPathParams 
    
}

type RegistryGetAPIResponse struct {
    API *interface{} 
    ContentType string 
    StatusCode int64 
    
}

