package operations

import (
"openapi/pkg/models/shared")

type GetV1PurchasesIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetV1PurchasesIDRequest struct {
    PathParams GetV1PurchasesIDPathParams 
    
}

type GetV1PurchasesIDResponse struct {
    ContentType string 
    PurchaseDto *shared.PurchaseDto 
    StatusCode int64 
    
}

