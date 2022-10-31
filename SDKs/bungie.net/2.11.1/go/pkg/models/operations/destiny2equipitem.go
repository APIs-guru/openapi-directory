package operations

import (
"openapi/pkg/models/shared")

type Destiny2EquipItemSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type Destiny2EquipItemRequest struct {
    Security Destiny2EquipItemSecurity 
    
}

type Destiny2EquipItemResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

