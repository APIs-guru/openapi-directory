package operations

import (
"openapi/pkg/models/shared")

type AppsGetSubscriptionPlanForAccountPathParams struct {
    AccountID int64 `pathParam:"style=simple,explode=false,name=account_id"`
    
}

type AppsGetSubscriptionPlanForAccountRequest struct {
    PathParams AppsGetSubscriptionPlanForAccountPathParams 
    
}

type AppsGetSubscriptionPlanForAccountResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    MarketplacePurchase *shared.MarketplacePurchase 
    
}

