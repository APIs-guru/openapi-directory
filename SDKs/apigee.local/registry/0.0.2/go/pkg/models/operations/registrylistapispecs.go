package operations



type RegistryListAPISpecsPathParams struct {
    API string `pathParam:"style=simple,explode=false,name=api"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    Version string `pathParam:"style=simple,explode=false,name=version"`
    
}

type RegistryListAPISpecsQueryParams struct {
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    PageSize *string `queryParam:"style=form,explode=true,name=page_size"`
    PageToken *string `queryParam:"style=form,explode=true,name=page_token"`
    
}

type RegistryListAPISpecsRequest struct {
    PathParams RegistryListAPISpecsPathParams 
    QueryParams RegistryListAPISpecsQueryParams 
    
}

type RegistryListAPISpecsResponse struct {
    ContentType string 
    ListAPISpecsResponse *interface{} 
    StatusCode int64 
    
}

