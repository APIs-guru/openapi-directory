package operations

import (
"openapi/pkg/models/shared")

type GetProductAdoptionPoliciesPathParams struct {
    MarketplaceID string `pathParam:"style=simple,explode=false,name=marketplace_id"`
    
}

type GetProductAdoptionPoliciesQueryParams struct {
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    
}

type GetProductAdoptionPoliciesSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetProductAdoptionPoliciesRequest struct {
    PathParams GetProductAdoptionPoliciesPathParams 
    QueryParams GetProductAdoptionPoliciesQueryParams 
    Security GetProductAdoptionPoliciesSecurity 
    
}

type GetProductAdoptionPoliciesResponse struct {
    ContentType string 
    ProductAdoptionPolicyResponse *shared.ProductAdoptionPolicyResponse 
    StatusCode int64 
    
}

