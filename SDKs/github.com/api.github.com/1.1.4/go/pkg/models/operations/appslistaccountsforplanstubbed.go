package operations

import (
"openapi/pkg/models/shared")

type AppsListAccountsForPlanStubbedPathParams struct {
    PlanID int64 `pathParam:"style=simple,explode=false,name=plan_id"`
    
}


type AppsListAccountsForPlanStubbedDirectionEnum string

const (
    AppsListAccountsForPlanStubbedDirectionEnumAsc AppsListAccountsForPlanStubbedDirectionEnum = "asc"
AppsListAccountsForPlanStubbedDirectionEnumDesc AppsListAccountsForPlanStubbedDirectionEnum = "desc"
)


type AppsListAccountsForPlanStubbedQueryParams struct {
    Direction *AppsListAccountsForPlanStubbedDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    Sort *shared.SortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type AppsListAccountsForPlanStubbedRequest struct {
    PathParams AppsListAccountsForPlanStubbedPathParams 
    QueryParams AppsListAccountsForPlanStubbedQueryParams 
    
}

type AppsListAccountsForPlanStubbedResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    MarketplacePurchases []shared.MarketplacePurchase 
    
}

