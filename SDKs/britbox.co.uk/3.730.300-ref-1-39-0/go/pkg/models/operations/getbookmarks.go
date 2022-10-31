package operations

import (
"time"
"openapi/pkg/models/shared")

type GetBookmarksQueryParams struct {
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type GetBookmarksSecurity struct {
    ProfileAuth shared.SchemeProfileAuth `security:"scheme,type=oauth2"`
    
}

type GetBookmarksRequest struct {
    QueryParams GetBookmarksQueryParams 
    Security GetBookmarksSecurity 
    
}

type GetBookmarksResponse struct {
    ContentType string 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    GetBookmarks200ApplicationJSONObject map[string]time.Time 
    
}

