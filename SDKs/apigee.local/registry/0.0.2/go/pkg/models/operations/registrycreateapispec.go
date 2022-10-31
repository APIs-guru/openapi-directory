package operations



type RegistryCreateAPISpecPathParams struct {
    API string `pathParam:"style=simple,explode=false,name=api"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    Version string `pathParam:"style=simple,explode=false,name=version"`
    
}

type RegistryCreateAPISpecQueryParams struct {
    APISpecID *string `queryParam:"style=form,explode=true,name=api_spec_id"`
    
}

type RegistryCreateAPISpecRequest struct {
    PathParams RegistryCreateAPISpecPathParams 
    QueryParams RegistryCreateAPISpecQueryParams 
    Request interface{} `request:"mediaType=application/json"`
    
}

type RegistryCreateAPISpecResponse struct {
    APISpec *interface{} 
    ContentType string 
    StatusCode int64 
    
}

