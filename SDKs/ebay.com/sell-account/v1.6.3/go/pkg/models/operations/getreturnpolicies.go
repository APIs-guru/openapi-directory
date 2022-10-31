package operations

import (
	"openapi/pkg/models/shared"
)

type GetReturnPoliciesQueryParams struct {
	MarketplaceID string `queryParam:"style=form,explode=true,name=marketplace_id"`
}

type GetReturnPoliciesSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetReturnPoliciesRequest struct {
	QueryParams GetReturnPoliciesQueryParams
	Security    GetReturnPoliciesSecurity
}

type GetReturnPoliciesResponse struct {
	ContentType          string
	ReturnPolicyResponse *shared.ReturnPolicyResponse
	StatusCode           int64
}
