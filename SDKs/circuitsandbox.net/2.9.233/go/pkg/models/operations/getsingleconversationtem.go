package operations

import (
"openapi/pkg/models/shared")

type GetSingleConversationtemPathParams struct {
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    
}

type GetSingleConversationtemSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetSingleConversationtemRequest struct {
    PathParams GetSingleConversationtemPathParams 
    Security GetSingleConversationtemSecurity 
    
}

type GetSingleConversationtemResponse struct {
    Body []byte 
    ContentType string 
    ConversationItem *interface{} 
    StatusCode int64 
    
}

