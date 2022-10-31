package operations

import (
"openapi/pkg/models/shared")

type GetDirectConversationQueryParams struct {
    Participant string `queryParam:"style=form,explode=true,name=participant"`
    
}

type GetDirectConversationSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetDirectConversationRequest struct {
    QueryParams GetDirectConversationQueryParams 
    Security GetDirectConversationSecurity 
    
}

type GetDirectConversationResponse struct {
    Body []byte 
    ContentType string 
    Conversation *interface{} 
    StatusCode int64 
    
}

