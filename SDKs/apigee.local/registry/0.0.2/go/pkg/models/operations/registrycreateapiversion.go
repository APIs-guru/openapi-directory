package operations



type RegistryCreateAPIVersionPathParams struct {
    API string `pathParam:"style=simple,explode=false,name=api"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    
}

type RegistryCreateAPIVersionQueryParams struct {
    APIVersionID *string `queryParam:"style=form,explode=true,name=api_version_id"`
    
}

type RegistryCreateAPIVersionRequest struct {
    PathParams RegistryCreateAPIVersionPathParams 
    QueryParams RegistryCreateAPIVersionQueryParams 
    Request interface{} `request:"mediaType=application/json"`
    
}

type RegistryCreateAPIVersionResponse struct {
    APIVersion *interface{} 
    ContentType string 
    StatusCode int64 
    
}

