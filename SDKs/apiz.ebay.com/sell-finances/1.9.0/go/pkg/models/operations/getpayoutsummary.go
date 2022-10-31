package operations

import (
"openapi/pkg/models/shared")

type GetPayoutSummaryQueryParams struct {
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    
}

type GetPayoutSummarySecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetPayoutSummaryRequest struct {
    QueryParams GetPayoutSummaryQueryParams 
    Security GetPayoutSummarySecurity 
    
}

type GetPayoutSummaryResponse struct {
    ContentType string 
    PayoutSummaryResponse *shared.PayoutSummaryResponse 
    StatusCode int64 
    
}

