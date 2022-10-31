package operations

import (
"openapi/pkg/models/shared")

type AppsListPlansQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type AppsListPlansRequest struct {
    QueryParams AppsListPlansQueryParams 
    
}

type AppsListPlansResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    MarketplaceListingPlans []shared.MarketplaceListingPlan 
    
}

