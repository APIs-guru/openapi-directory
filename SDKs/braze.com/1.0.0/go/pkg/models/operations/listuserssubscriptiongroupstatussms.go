package operations



type ListUserSSubscriptionGroupStatusSmsQueryParams struct {
    ExternalID *string `queryParam:"style=form,explode=true,name=external_id"`
    Phone *string `queryParam:"style=form,explode=true,name=phone"`
    SubscriptionGroupID *string `queryParam:"style=form,explode=true,name=subscription_group_id"`
    
}

type ListUserSSubscriptionGroupStatusSmsRequest struct {
    QueryParams ListUserSSubscriptionGroupStatusSmsQueryParams 
    
}

type ListUserSSubscriptionGroupStatusSmsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

