package operations

import (
	"openapi/pkg/models/shared"
)

type GetReturnPoliciesPathParams struct {
	MarketplaceID string `pathParam:"style=simple,explode=false,name=marketplace_id"`
}

type GetReturnPoliciesQueryParams struct {
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
}

type GetReturnPoliciesSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetReturnPoliciesRequest struct {
	PathParams  GetReturnPoliciesPathParams
	QueryParams GetReturnPoliciesQueryParams
	Security    GetReturnPoliciesSecurity
}

type GetReturnPoliciesResponse struct {
	ContentType          string
	ReturnPolicyResponse *shared.ReturnPolicyResponse
	StatusCode           int64
}
