package operations



type GetTransactionPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetTransactionQueryParams struct {
    IncludeChargestation *bool `queryParam:"style=form,explode=true,name=include_chargestation"`
    IncludeConnector *bool `queryParam:"style=form,explode=true,name=include_connector"`
    IncludeDriver *bool `queryParam:"style=form,explode=true,name=include_driver"`
    IncludeEvse *bool `queryParam:"style=form,explode=true,name=include_evse"`
    IncludeOrganization *bool `queryParam:"style=form,explode=true,name=include_organization"`
    IncludeRate *bool `queryParam:"style=form,explode=true,name=include_rate"`
    IncludeReservation *bool `queryParam:"style=form,explode=true,name=include_reservation"`
    IncludeToken *bool `queryParam:"style=form,explode=true,name=include_token"`
    
}

type GetTransactionRequest struct {
    PathParams GetTransactionPathParams 
    QueryParams GetTransactionQueryParams 
    
}

type GetTransactionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

