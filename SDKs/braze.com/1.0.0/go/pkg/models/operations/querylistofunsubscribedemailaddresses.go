package operations



type QueryListOfUnsubscribedEmailAddressesQueryParams struct {
    Email *string `queryParam:"style=form,explode=true,name=email"`
    EndDate *string `queryParam:"style=form,explode=true,name=end_date"`
    Limit *string `queryParam:"style=form,explode=true,name=limit"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    SortDirection *string `queryParam:"style=form,explode=true,name=sort_direction"`
    StartDate *string `queryParam:"style=form,explode=true,name=start_date"`
    
}

type QueryListOfUnsubscribedEmailAddressesRequest struct {
    QueryParams QueryListOfUnsubscribedEmailAddressesQueryParams 
    
}

type QueryListOfUnsubscribedEmailAddressesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

