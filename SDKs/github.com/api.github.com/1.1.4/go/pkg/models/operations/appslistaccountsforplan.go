package operations

import (
"openapi/pkg/models/shared")

type AppsListAccountsForPlanPathParams struct {
    PlanID int64 `pathParam:"style=simple,explode=false,name=plan_id"`
    
}


type AppsListAccountsForPlanDirectionEnum string

const (
    AppsListAccountsForPlanDirectionEnumAsc AppsListAccountsForPlanDirectionEnum = "asc"
AppsListAccountsForPlanDirectionEnumDesc AppsListAccountsForPlanDirectionEnum = "desc"
)


type AppsListAccountsForPlanQueryParams struct {
    Direction *AppsListAccountsForPlanDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    Sort *shared.SortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type AppsListAccountsForPlanRequest struct {
    PathParams AppsListAccountsForPlanPathParams 
    QueryParams AppsListAccountsForPlanQueryParams 
    
}

type AppsListAccountsForPlanResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    MarketplacePurchases []shared.MarketplacePurchase 
    ValidationError *shared.ValidationError 
    
}

