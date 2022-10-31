package operations

import (
"openapi/pkg/models/shared")

type SuppliersGetAccountTransPathParams struct {
    ItemID int64 `pathParam:"style=simple,explode=false,name=itemId"`
    
}

type SuppliersGetAccountTransRequest struct {
    PathParams SuppliersGetAccountTransPathParams 
    
}

type SuppliersGetAccountTransResponse struct {
    AccountTranDtos []shared.AccountTranDto 
    ContentType string 
    StatusCode int64 
    
}

