package operations

import (
"openapi/pkg/models/shared")

type GetPaymentsIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetPaymentsIDRequest struct {
    PathParams GetPaymentsIDPathParams 
    
}

type GetPaymentsIDResponse struct {
    AccountLineItemEntity *shared.AccountLineItemEntity 
    ContentType string 
    StatusCode int64 
    
}

