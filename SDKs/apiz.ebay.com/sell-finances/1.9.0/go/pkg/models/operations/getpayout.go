package operations

import (
"openapi/pkg/models/shared")

type GetPayoutPathParams struct {
    PayoutID string `pathParam:"style=simple,explode=false,name=payout_Id"`
    
}

type GetPayoutSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetPayoutRequest struct {
    PathParams GetPayoutPathParams 
    Security GetPayoutSecurity 
    
}

type GetPayoutResponse struct {
    ContentType string 
    Payout *shared.Payout 
    StatusCode int64 
    
}

