package operations



type GetChargeStationConnectorsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetChargeStationConnectorsQueryParams struct {
    IncludeEvse *bool `queryParam:"style=form,explode=true,name=include_evse"`
    IncludeOrganization *bool `queryParam:"style=form,explode=true,name=include_organization"`
    
}

type GetChargeStationConnectorsRequest struct {
    PathParams GetChargeStationConnectorsPathParams 
    QueryParams GetChargeStationConnectorsQueryParams 
    
}

type GetChargeStationConnectorsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

