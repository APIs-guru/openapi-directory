package operations

import (
	"openapi/pkg/models/shared"
)

type GetItemConditionPoliciesPathParams struct {
	MarketplaceID string `pathParam:"style=simple,explode=false,name=marketplace_id"`
}

type GetItemConditionPoliciesQueryParams struct {
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
}

type GetItemConditionPoliciesSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetItemConditionPoliciesRequest struct {
	PathParams  GetItemConditionPoliciesPathParams
	QueryParams GetItemConditionPoliciesQueryParams
	Security    GetItemConditionPoliciesSecurity
}

type GetItemConditionPoliciesResponse struct {
	ContentType                 string
	ItemConditionPolicyResponse *shared.ItemConditionPolicyResponse
	StatusCode                  int64
}
