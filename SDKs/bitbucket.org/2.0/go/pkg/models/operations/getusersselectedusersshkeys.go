package operations

import (
"openapi/pkg/models/shared")

type GetUsersSelectedUserSSHKeysPathParams struct {
    SelectedUser string `pathParam:"style=simple,explode=false,name=selected_user"`
    
}

type GetUsersSelectedUserSSHKeysSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetUsersSelectedUserSSHKeysSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetUsersSelectedUserSSHKeysSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetUsersSelectedUserSSHKeysSecurity struct {
    Option1 *GetUsersSelectedUserSSHKeysSecurityOption1 `security:"option"`
    Option2 *GetUsersSelectedUserSSHKeysSecurityOption2 `security:"option"`
    Option3 *GetUsersSelectedUserSSHKeysSecurityOption3 `security:"option"`
    
}

type GetUsersSelectedUserSSHKeysRequest struct {
    PathParams GetUsersSelectedUserSSHKeysPathParams 
    Security GetUsersSelectedUserSSHKeysSecurity 
    
}

type GetUsersSelectedUserSSHKeysResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    PaginatedSSHUserKeys *shared.PaginatedSSHUserKeys 
    
}

