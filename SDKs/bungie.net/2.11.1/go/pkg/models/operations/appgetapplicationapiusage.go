package operations

import (
"time"
"openapi/pkg/models/shared")

type AppGetApplicationAPIUsagePathParams struct {
    ApplicationID int32 `pathParam:"style=simple,explode=false,name=applicationId"`
    
}

type AppGetApplicationAPIUsageQueryParams struct {
    End *time.Time `queryParam:"style=form,explode=true,name=end"`
    Start *time.Time `queryParam:"style=form,explode=true,name=start"`
    
}

type AppGetApplicationAPIUsageSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type AppGetApplicationAPIUsageRequest struct {
    PathParams AppGetApplicationAPIUsagePathParams 
    QueryParams AppGetApplicationAPIUsageQueryParams 
    Security AppGetApplicationAPIUsageSecurity 
    
}

type AppGetApplicationAPIUsageResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

