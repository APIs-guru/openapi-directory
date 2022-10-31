package operations

import (
"openapi/pkg/models/shared")

type GetWatchedQueryParams struct {
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type GetWatchedSecurity struct {
    ProfileAuth shared.SchemeProfileAuth `security:"scheme,type=oauth2"`
    
}

type GetWatchedRequest struct {
    QueryParams GetWatchedQueryParams 
    Security GetWatchedSecurity 
    
}

type GetWatchedResponse struct {
    ContentType string 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    GetWatched200ApplicationJSONObject map[string]shared.Watched 
    
}

