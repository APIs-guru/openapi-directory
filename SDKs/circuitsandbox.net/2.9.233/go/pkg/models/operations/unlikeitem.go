package operations

import (
"openapi/pkg/models/shared")

type UnlikeItemPathParams struct {
    ConvID string `pathParam:"style=simple,explode=false,name=convId"`
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    
}

type UnlikeItemSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type UnlikeItemRequest struct {
    PathParams UnlikeItemPathParams 
    Security UnlikeItemSecurity 
    
}

type UnlikeItemResponse struct {
    ContentType string 
    StatusCode int64 
    
}

