package operations

import (
	"openapi/pkg/models/shared"
)

type GetNegotiatedPricePoliciesPathParams struct {
	MarketplaceID string `pathParam:"style=simple,explode=false,name=marketplace_id"`
}

type GetNegotiatedPricePoliciesQueryParams struct {
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
}

type GetNegotiatedPricePoliciesSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetNegotiatedPricePoliciesRequest struct {
	PathParams  GetNegotiatedPricePoliciesPathParams
	QueryParams GetNegotiatedPricePoliciesQueryParams
	Security    GetNegotiatedPricePoliciesSecurity
}

type GetNegotiatedPricePoliciesResponse struct {
	ContentType                   string
	NegotiatedPricePolicyResponse *shared.NegotiatedPricePolicyResponse
	StatusCode                    int64
}
