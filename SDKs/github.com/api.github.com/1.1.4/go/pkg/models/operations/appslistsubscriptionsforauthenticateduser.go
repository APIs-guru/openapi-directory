package operations

import (
"openapi/pkg/models/shared")

type AppsListSubscriptionsForAuthenticatedUserQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type AppsListSubscriptionsForAuthenticatedUserRequest struct {
    QueryParams AppsListSubscriptionsForAuthenticatedUserQueryParams 
    
}

type AppsListSubscriptionsForAuthenticatedUserResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    UserMarketplacePurchases []shared.UserMarketplacePurchase 
    
}

