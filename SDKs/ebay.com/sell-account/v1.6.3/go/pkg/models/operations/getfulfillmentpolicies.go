package operations

import (
"openapi/pkg/models/shared")

type GetFulfillmentPoliciesQueryParams struct {
    MarketplaceID string `queryParam:"style=form,explode=true,name=marketplace_id"`
    
}

type GetFulfillmentPoliciesSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetFulfillmentPoliciesRequest struct {
    QueryParams GetFulfillmentPoliciesQueryParams 
    Security GetFulfillmentPoliciesSecurity 
    
}

type GetFulfillmentPoliciesResponse struct {
    ContentType string 
    FulfillmentPolicyResponse *shared.FulfillmentPolicyResponse 
    StatusCode int64 
    
}

