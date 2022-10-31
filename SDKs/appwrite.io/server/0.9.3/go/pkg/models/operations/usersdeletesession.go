package operations

import (
"openapi/pkg/models/shared")

type UsersDeleteSessionPathParams struct {
    SessionID string `pathParam:"style=simple,explode=false,name=sessionId"`
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type UsersDeleteSessionSecurity struct {
    Key shared.SchemeKey `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type UsersDeleteSessionRequest struct {
    PathParams UsersDeleteSessionPathParams 
    Security UsersDeleteSessionSecurity 
    
}

type UsersDeleteSessionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

