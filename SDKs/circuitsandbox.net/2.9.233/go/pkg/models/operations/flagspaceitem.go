package operations

import (
"openapi/pkg/models/shared")

type FlagSpaceItemPathParams struct {
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    
}

type FlagSpaceItemSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type FlagSpaceItemRequest struct {
    PathParams FlagSpaceItemPathParams 
    Security FlagSpaceItemSecurity 
    
}

type FlagSpaceItemResponse struct {
    ContentType string 
    StatusCode int64 
    
}

