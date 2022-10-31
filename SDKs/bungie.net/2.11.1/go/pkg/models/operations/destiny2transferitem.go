package operations

import (
"openapi/pkg/models/shared")

type Destiny2TransferItemSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type Destiny2TransferItemRequest struct {
    Security Destiny2TransferItemSecurity 
    
}

type Destiny2TransferItemResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

