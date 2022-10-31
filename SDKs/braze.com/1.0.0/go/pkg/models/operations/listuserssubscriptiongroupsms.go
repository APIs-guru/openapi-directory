package operations



type ListUserSSubscriptionGroupSmsQueryParams struct {
    ExternalID *string `queryParam:"style=form,explode=true,name=external_id"`
    Limit *string `queryParam:"style=form,explode=true,name=limit"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    Phone *string `queryParam:"style=form,explode=true,name=phone"`
    
}

type ListUserSSubscriptionGroupSmsRequest struct {
    QueryParams ListUserSSubscriptionGroupSmsQueryParams 
    
}

type ListUserSSubscriptionGroupSmsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

