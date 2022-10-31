package operations

import (
"openapi/pkg/models/shared")

type UsersGetPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type UsersGetSecurity struct {
    Key shared.SchemeKey `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type UsersGetRequest struct {
    PathParams UsersGetPathParams 
    Security UsersGetSecurity 
    
}

type UsersGetResponse struct {
    ContentType string 
    StatusCode int64 
    User *shared.User 
    
}

