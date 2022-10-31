package operations



type RegistryUpdateAPIPathParams struct {
    API string `pathParam:"style=simple,explode=false,name=api"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    
}

type RegistryUpdateAPIQueryParams struct {
    UpdateMask *string `queryParam:"style=form,explode=true,name=update_mask"`
    
}

type RegistryUpdateAPIRequest struct {
    PathParams RegistryUpdateAPIPathParams 
    QueryParams RegistryUpdateAPIQueryParams 
    Request interface{} `request:"mediaType=application/json"`
    
}

type RegistryUpdateAPIResponse struct {
    API *interface{} 
    ContentType string 
    StatusCode int64 
    
}

