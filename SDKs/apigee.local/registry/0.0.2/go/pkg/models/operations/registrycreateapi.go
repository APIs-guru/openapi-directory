package operations



type RegistryCreateAPIPathParams struct {
    Project string `pathParam:"style=simple,explode=false,name=project"`
    
}

type RegistryCreateAPIQueryParams struct {
    APIID *string `queryParam:"style=form,explode=true,name=api_id"`
    
}

type RegistryCreateAPIRequest struct {
    PathParams RegistryCreateAPIPathParams 
    QueryParams RegistryCreateAPIQueryParams 
    Request interface{} `request:"mediaType=application/json"`
    
}

type RegistryCreateAPIResponse struct {
    API *interface{} 
    ContentType string 
    StatusCode int64 
    
}

