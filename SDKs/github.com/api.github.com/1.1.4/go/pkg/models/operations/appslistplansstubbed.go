package operations

import (
	"openapi/pkg/models/shared"
)

type AppsListPlansStubbedQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type AppsListPlansStubbedRequest struct {
	QueryParams AppsListPlansStubbedQueryParams
}

type AppsListPlansStubbedResponse struct {
	ContentType             string
	Headers                 map[string][]string
	StatusCode              int64
	BasicError              *shared.BasicError
	MarketplaceListingPlans []shared.MarketplaceListingPlan
}
