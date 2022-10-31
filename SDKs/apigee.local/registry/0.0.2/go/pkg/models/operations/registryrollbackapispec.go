package operations



type RegistryRollbackAPISpecPathParams struct {
    API string `pathParam:"style=simple,explode=false,name=api"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    Spec string `pathParam:"style=simple,explode=false,name=spec"`
    Version string `pathParam:"style=simple,explode=false,name=version"`
    
}

type RegistryRollbackAPISpecRequest struct {
    PathParams RegistryRollbackAPISpecPathParams 
    Request interface{} `request:"mediaType=application/json"`
    
}

type RegistryRollbackAPISpecResponse struct {
    APISpec *interface{} 
    ContentType string 
    StatusCode int64 
    
}

