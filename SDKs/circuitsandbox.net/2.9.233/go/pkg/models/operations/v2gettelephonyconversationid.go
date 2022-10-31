package operations

import (
"openapi/pkg/models/shared")

type V2GetTelephonyConversationIDSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type V2GetTelephonyConversationIDRequest struct {
    Security V2GetTelephonyConversationIDSecurity 
    
}

type V2GetTelephonyConversationIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

