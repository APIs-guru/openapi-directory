package operations

import (
"openapi/pkg/models/shared")

type UsersDeletePathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type UsersDeleteSecurity struct {
    Key shared.SchemeKey `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type UsersDeleteRequest struct {
    PathParams UsersDeletePathParams 
    Security UsersDeleteSecurity 
    
}

type UsersDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

