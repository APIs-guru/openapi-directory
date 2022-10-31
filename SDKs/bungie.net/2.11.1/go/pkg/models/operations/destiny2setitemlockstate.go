package operations

import (
"openapi/pkg/models/shared")

type Destiny2SetItemLockStateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type Destiny2SetItemLockStateRequest struct {
    Security Destiny2SetItemLockStateSecurity 
    
}

type Destiny2SetItemLockStateResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

