package operations

import (
"openapi/pkg/models/shared")

type DeleteTextItemPathParams struct {
    ConvID string `pathParam:"style=simple,explode=false,name=convId"`
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    
}

type DeleteTextItemSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type DeleteTextItemRequest struct {
    PathParams DeleteTextItemPathParams 
    Security DeleteTextItemSecurity 
    
}

type DeleteTextItemResponse struct {
    Body []byte 
    ContentType string 
    ConversationItem *interface{} 
    StatusCode int64 
    
}

