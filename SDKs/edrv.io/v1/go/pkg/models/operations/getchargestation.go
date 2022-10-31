package operations



type GetChargeStationPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetChargeStationQueryParams struct {
    IncludeEvses *bool `queryParam:"style=form,explode=true,name=include_evses"`
    IncludeLocation *bool `queryParam:"style=form,explode=true,name=include_location"`
    IncludeOrganization *bool `queryParam:"style=form,explode=true,name=include_organization"`
    
}

type GetChargeStationRequest struct {
    PathParams GetChargeStationPathParams 
    QueryParams GetChargeStationQueryParams 
    
}

type GetChargeStationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

