package operations

import (
"openapi/pkg/models/shared")

type GetSubscriptionStatusPathParams struct {
    Platform string `pathParam:"style=simple,explode=false,name=platform"`
    
}

type GetSubscriptionStatusQueryParams struct {
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type GetSubscriptionStatusSecurity struct {
    AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
    
}

type GetSubscriptionStatusRequest struct {
    PathParams GetSubscriptionStatusPathParams 
    QueryParams GetSubscriptionStatusQueryParams 
    Security GetSubscriptionStatusSecurity 
    
}

type GetSubscriptionStatusResponse struct {
    ContentType string 
    ItvSubscriptionStatusResponse *shared.ItvSubscriptionStatusResponse 
    StatusCode int64 
    
}

