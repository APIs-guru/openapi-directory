package operations



type GetLocationPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetLocationQueryParams struct {
    IncludeChargestations *bool `queryParam:"style=form,explode=true,name=include_chargestations"`
    IncludeOrganization *bool `queryParam:"style=form,explode=true,name=include_organization"`
    
}

type GetLocationRequest struct {
    PathParams GetLocationPathParams 
    QueryParams GetLocationQueryParams 
    
}

type GetLocationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

