package operations



type GetReservationPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetReservationQueryParams struct {
    IncludeChargestation *bool `queryParam:"style=form,explode=true,name=include_chargestation"`
    IncludeOrganization *bool `queryParam:"style=form,explode=true,name=include_organization"`
    
}

type GetReservationRequest struct {
    PathParams GetReservationPathParams 
    QueryParams GetReservationQueryParams 
    
}

type GetReservationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

