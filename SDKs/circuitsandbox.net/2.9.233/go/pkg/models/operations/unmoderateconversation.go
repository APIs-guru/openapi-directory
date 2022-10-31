package operations

import (
"openapi/pkg/models/shared")

type UnmoderateConversationPathParams struct {
    ConvID string `pathParam:"style=simple,explode=false,name=convId"`
    
}

type UnmoderateConversationSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type UnmoderateConversationRequest struct {
    PathParams UnmoderateConversationPathParams 
    Security UnmoderateConversationSecurity 
    
}

type UnmoderateConversationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

