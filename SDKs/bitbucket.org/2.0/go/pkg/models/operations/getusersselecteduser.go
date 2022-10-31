package operations

import (
"openapi/pkg/models/shared")

type GetUsersSelectedUserPathParams struct {
    SelectedUser string `pathParam:"style=simple,explode=false,name=selected_user"`
    
}

type GetUsersSelectedUserSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetUsersSelectedUserSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetUsersSelectedUserSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetUsersSelectedUserSecurity struct {
    Option1 *GetUsersSelectedUserSecurityOption1 `security:"option"`
    Option2 *GetUsersSelectedUserSecurityOption2 `security:"option"`
    Option3 *GetUsersSelectedUserSecurityOption3 `security:"option"`
    
}

type GetUsersSelectedUserRequest struct {
    PathParams GetUsersSelectedUserPathParams 
    Security GetUsersSelectedUserSecurity 
    
}

type GetUsersSelectedUserResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    User map[string]interface{} 
    
}

