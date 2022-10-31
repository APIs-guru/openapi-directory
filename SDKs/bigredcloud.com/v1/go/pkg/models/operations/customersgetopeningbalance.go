package operations

import (
"openapi/pkg/models/shared")

type CustomersGetOpeningBalancePathParams struct {
    ItemID int64 `pathParam:"style=simple,explode=false,name=itemId"`
    
}

type CustomersGetOpeningBalanceRequest struct {
    PathParams CustomersGetOpeningBalancePathParams 
    
}

type CustomersGetOpeningBalanceResponse struct {
    ContentType string 
    OwnerOpeningBalanceInPeriodsDto *shared.OwnerOpeningBalanceInPeriodsDto 
    StatusCode int64 
    
}

