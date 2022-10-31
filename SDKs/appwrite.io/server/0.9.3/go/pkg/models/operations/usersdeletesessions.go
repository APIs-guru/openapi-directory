package operations

import (
"openapi/pkg/models/shared")

type UsersDeleteSessionsPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type UsersDeleteSessionsSecurity struct {
    Key shared.SchemeKey `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type UsersDeleteSessionsRequest struct {
    PathParams UsersDeleteSessionsPathParams 
    Security UsersDeleteSessionsSecurity 
    
}

type UsersDeleteSessionsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

