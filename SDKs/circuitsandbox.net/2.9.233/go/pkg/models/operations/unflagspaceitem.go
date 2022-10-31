package operations

import (
"openapi/pkg/models/shared")

type UnflagSpaceItemPathParams struct {
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    
}

type UnflagSpaceItemSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type UnflagSpaceItemRequest struct {
    PathParams UnflagSpaceItemPathParams 
    Security UnflagSpaceItemSecurity 
    
}

type UnflagSpaceItemResponse struct {
    ContentType string 
    StatusCode int64 
    
}

