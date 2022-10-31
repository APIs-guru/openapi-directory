package operations

import (
"openapi/pkg/models/shared")

type PutUsersSelectedUserSSHKeysKeyIDPathParams struct {
    KeyID string `pathParam:"style=simple,explode=false,name=key_id"`
    SelectedUser string `pathParam:"style=simple,explode=false,name=selected_user"`
    
}

type PutUsersSelectedUserSSHKeysKeyIDSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PutUsersSelectedUserSSHKeysKeyIDSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type PutUsersSelectedUserSSHKeysKeyIDSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PutUsersSelectedUserSSHKeysKeyIDSecurity struct {
    Option1 *PutUsersSelectedUserSSHKeysKeyIDSecurityOption1 `security:"option"`
    Option2 *PutUsersSelectedUserSSHKeysKeyIDSecurityOption2 `security:"option"`
    Option3 *PutUsersSelectedUserSSHKeysKeyIDSecurityOption3 `security:"option"`
    
}

type PutUsersSelectedUserSSHKeysKeyIDRequest struct {
    PathParams PutUsersSelectedUserSSHKeysKeyIDPathParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    Security PutUsersSelectedUserSSHKeysKeyIDSecurity 
    
}

type PutUsersSelectedUserSSHKeysKeyIDResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    SSHAccountKey map[string]interface{} 
    
}

