package operations

import (
	"openapi/pkg/models/shared"
)

type GetPaymentPoliciesQueryParams struct {
	MarketplaceID string `queryParam:"style=form,explode=true,name=marketplace_id"`
}

type GetPaymentPoliciesSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetPaymentPoliciesRequest struct {
	QueryParams GetPaymentPoliciesQueryParams
	Security    GetPaymentPoliciesSecurity
}

type GetPaymentPoliciesResponse struct {
	ContentType           string
	PaymentPolicyResponse *shared.PaymentPolicyResponse
	StatusCode            int64
}
