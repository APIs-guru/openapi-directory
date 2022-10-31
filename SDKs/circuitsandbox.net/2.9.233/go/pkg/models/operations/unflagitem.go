package operations

import (
"openapi/pkg/models/shared")

type UnFlagItemPathParams struct {
    ConvID string `pathParam:"style=simple,explode=false,name=convId"`
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    
}

type UnFlagItemSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type UnFlagItemRequest struct {
    PathParams UnFlagItemPathParams 
    Security UnFlagItemSecurity 
    
}

type UnFlagItemResponse struct {
    ContentType string 
    StatusCode int64 
    
}

