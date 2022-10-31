package operations

import (
"openapi/pkg/models/shared")

type UsersUpdateStatusPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type UsersUpdateStatusRequestBody struct {
    Status int64 `json:"status"`
    
}

type UsersUpdateStatusSecurity struct {
    Key shared.SchemeKey `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type UsersUpdateStatusRequest struct {
    PathParams UsersUpdateStatusPathParams 
    Request *UsersUpdateStatusRequestBody `request:"mediaType=application/json"`
    Security UsersUpdateStatusSecurity 
    
}

type UsersUpdateStatusResponse struct {
    ContentType string 
    StatusCode int64 
    User *shared.User 
    
}

