package operations

import (
"openapi/pkg/models/shared")

type DeleteUsersSelectedUserSSHKeysKeyIDPathParams struct {
    KeyID string `pathParam:"style=simple,explode=false,name=key_id"`
    SelectedUser string `pathParam:"style=simple,explode=false,name=selected_user"`
    
}

type DeleteUsersSelectedUserSSHKeysKeyIDSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteUsersSelectedUserSSHKeysKeyIDSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteUsersSelectedUserSSHKeysKeyIDSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteUsersSelectedUserSSHKeysKeyIDSecurity struct {
    Option1 *DeleteUsersSelectedUserSSHKeysKeyIDSecurityOption1 `security:"option"`
    Option2 *DeleteUsersSelectedUserSSHKeysKeyIDSecurityOption2 `security:"option"`
    Option3 *DeleteUsersSelectedUserSSHKeysKeyIDSecurityOption3 `security:"option"`
    
}

type DeleteUsersSelectedUserSSHKeysKeyIDRequest struct {
    PathParams DeleteUsersSelectedUserSSHKeysKeyIDPathParams 
    Security DeleteUsersSelectedUserSSHKeysKeyIDSecurity 
    
}

type DeleteUsersSelectedUserSSHKeysKeyIDResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    
}

