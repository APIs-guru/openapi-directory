package operations

import (
"openapi/pkg/models/shared")

type DeleteItvPurchasePlatformPathParams struct {
    Platform string `pathParam:"style=simple,explode=false,name=platform"`
    
}

type DeleteItvPurchasePlatformQueryParams struct {
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type DeleteItvPurchasePlatformSecurity struct {
    AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
    
}

type DeleteItvPurchasePlatformRequest struct {
    PathParams DeleteItvPurchasePlatformPathParams 
    QueryParams DeleteItvPurchasePlatformQueryParams 
    Request shared.ItvCancelSubscriptionRequest `request:"mediaType=application/json"`
    Security DeleteItvPurchasePlatformSecurity 
    
}

type DeleteItvPurchasePlatformResponse struct {
    ContentType string 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

