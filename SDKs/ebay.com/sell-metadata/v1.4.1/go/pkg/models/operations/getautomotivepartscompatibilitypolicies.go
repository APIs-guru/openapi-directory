package operations

import (
	"openapi/pkg/models/shared"
)

type GetAutomotivePartsCompatibilityPoliciesPathParams struct {
	MarketplaceID string `pathParam:"style=simple,explode=false,name=marketplace_id"`
}

type GetAutomotivePartsCompatibilityPoliciesQueryParams struct {
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
}

type GetAutomotivePartsCompatibilityPoliciesSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetAutomotivePartsCompatibilityPoliciesRequest struct {
	PathParams  GetAutomotivePartsCompatibilityPoliciesPathParams
	QueryParams GetAutomotivePartsCompatibilityPoliciesQueryParams
	Security    GetAutomotivePartsCompatibilityPoliciesSecurity
}

type GetAutomotivePartsCompatibilityPoliciesResponse struct {
	AutomotivePartsCompatibilityPolicyResponse *shared.AutomotivePartsCompatibilityPolicyResponse
	ContentType                                string
	StatusCode                                 int64
}
