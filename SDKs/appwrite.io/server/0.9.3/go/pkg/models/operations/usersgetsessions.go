package operations

import (
"openapi/pkg/models/shared")

type UsersGetSessionsPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type UsersGetSessionsSecurity struct {
    Key shared.SchemeKey `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type UsersGetSessionsRequest struct {
    PathParams UsersGetSessionsPathParams 
    Security UsersGetSessionsSecurity 
    
}

type UsersGetSessionsResponse struct {
    ContentType string 
    StatusCode int64 
    SessionList *shared.SessionList 
    
}

