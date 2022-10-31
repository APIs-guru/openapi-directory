package operations

import (
"openapi/pkg/models/shared")

type GetPayoutsQueryParams struct {
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Limit *string `queryParam:"style=form,explode=true,name=limit"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetPayoutsSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetPayoutsRequest struct {
    QueryParams GetPayoutsQueryParams 
    Security GetPayoutsSecurity 
    
}

type GetPayoutsResponse struct {
    ContentType string 
    Payouts *shared.Payouts 
    StatusCode int64 
    
}

