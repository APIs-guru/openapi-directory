package operations

import (
"openapi/pkg/models/shared")

type PostUsersSelectedUserSSHKeysPathParams struct {
    SelectedUser string `pathParam:"style=simple,explode=false,name=selected_user"`
    
}

type PostUsersSelectedUserSSHKeysSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostUsersSelectedUserSSHKeysSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type PostUsersSelectedUserSSHKeysSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostUsersSelectedUserSSHKeysSecurity struct {
    Option1 *PostUsersSelectedUserSSHKeysSecurityOption1 `security:"option"`
    Option2 *PostUsersSelectedUserSSHKeysSecurityOption2 `security:"option"`
    Option3 *PostUsersSelectedUserSSHKeysSecurityOption3 `security:"option"`
    
}

type PostUsersSelectedUserSSHKeysRequest struct {
    PathParams PostUsersSelectedUserSSHKeysPathParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    Security PostUsersSelectedUserSSHKeysSecurity 
    
}

type PostUsersSelectedUserSSHKeysResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    SSHAccountKey map[string]interface{} 
    
}

