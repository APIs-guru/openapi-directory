package operations

import (
"openapi/pkg/models/shared")

type UnlikeSpaceItemPathParams struct {
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    
}

type UnlikeSpaceItemSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type UnlikeSpaceItemRequest struct {
    PathParams UnlikeSpaceItemPathParams 
    Security UnlikeSpaceItemSecurity 
    
}

type UnlikeSpaceItemResponse struct {
    ContentType string 
    StatusCode int64 
    
}

