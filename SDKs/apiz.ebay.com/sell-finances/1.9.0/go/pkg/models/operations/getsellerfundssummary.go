package operations

import (
"openapi/pkg/models/shared")

type GetSellerFundsSummarySecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetSellerFundsSummaryRequest struct {
    Security GetSellerFundsSummarySecurity 
    
}

type GetSellerFundsSummaryResponse struct {
    ContentType string 
    SellerFundsSummaryResponse *shared.SellerFundsSummaryResponse 
    StatusCode int64 
    
}

