package operations



type RegistryListAPIVersionsPathParams struct {
    API string `pathParam:"style=simple,explode=false,name=api"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    
}

type RegistryListAPIVersionsQueryParams struct {
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    PageSize *string `queryParam:"style=form,explode=true,name=page_size"`
    PageToken *string `queryParam:"style=form,explode=true,name=page_token"`
    
}

type RegistryListAPIVersionsRequest struct {
    PathParams RegistryListAPIVersionsPathParams 
    QueryParams RegistryListAPIVersionsQueryParams 
    
}

type RegistryListAPIVersionsResponse struct {
    ContentType string 
    ListAPIVersionsResponse *interface{} 
    StatusCode int64 
    
}

