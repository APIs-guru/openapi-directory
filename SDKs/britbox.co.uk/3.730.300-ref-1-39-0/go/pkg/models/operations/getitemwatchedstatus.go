package operations

import (
"openapi/pkg/models/shared")

type GetItemWatchedStatusPathParams struct {
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    
}

type GetItemWatchedStatusQueryParams struct {
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type GetItemWatchedStatusSecurity struct {
    ProfileAuth shared.SchemeProfileAuth `security:"scheme,type=oauth2"`
    
}

type GetItemWatchedStatusRequest struct {
    PathParams GetItemWatchedStatusPathParams 
    QueryParams GetItemWatchedStatusQueryParams 
    Security GetItemWatchedStatusSecurity 
    
}

type GetItemWatchedStatusResponse struct {
    ContentType string 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    Watched *shared.Watched 
    
}

