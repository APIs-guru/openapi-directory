package operations

import (
"openapi/pkg/models/shared")

type GetListingStructurePoliciesPathParams struct {
    MarketplaceID string `pathParam:"style=simple,explode=false,name=marketplace_id"`
    
}

type GetListingStructurePoliciesQueryParams struct {
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    
}

type GetListingStructurePoliciesSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetListingStructurePoliciesRequest struct {
    PathParams GetListingStructurePoliciesPathParams 
    QueryParams GetListingStructurePoliciesQueryParams 
    Security GetListingStructurePoliciesSecurity 
    
}

type GetListingStructurePoliciesResponse struct {
    ContentType string 
    ListingStructurePolicyResponse *shared.ListingStructurePolicyResponse 
    StatusCode int64 
    
}

