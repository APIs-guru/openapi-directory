package operations

import (
"openapi/pkg/models/shared")

type GetSupportInfoSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetSupportInfoRequest struct {
    Security GetSupportInfoSecurity 
    
}

type GetSupportInfoResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

