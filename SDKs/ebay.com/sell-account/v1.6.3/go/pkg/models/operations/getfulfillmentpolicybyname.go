package operations

import (
	"openapi/pkg/models/shared"
)

type GetFulfillmentPolicyByNameQueryParams struct {
	MarketplaceID string `queryParam:"style=form,explode=true,name=marketplace_id"`
	Name          string `queryParam:"style=form,explode=true,name=name"`
}

type GetFulfillmentPolicyByNameSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetFulfillmentPolicyByNameRequest struct {
	QueryParams GetFulfillmentPolicyByNameQueryParams
	Security    GetFulfillmentPolicyByNameSecurity
}

type GetFulfillmentPolicyByNameResponse struct {
	ContentType       string
	FulfillmentPolicy *shared.FulfillmentPolicy
	StatusCode        int64
}
