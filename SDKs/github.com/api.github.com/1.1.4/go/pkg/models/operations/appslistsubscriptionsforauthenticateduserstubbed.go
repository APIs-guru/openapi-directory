package operations

import (
	"openapi/pkg/models/shared"
)

type AppsListSubscriptionsForAuthenticatedUserStubbedQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type AppsListSubscriptionsForAuthenticatedUserStubbedRequest struct {
	QueryParams AppsListSubscriptionsForAuthenticatedUserStubbedQueryParams
}

type AppsListSubscriptionsForAuthenticatedUserStubbedResponse struct {
	ContentType              string
	Headers                  map[string][]string
	StatusCode               int64
	BasicError               *shared.BasicError
	UserMarketplacePurchases []shared.UserMarketplacePurchase
}
