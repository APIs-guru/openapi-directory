package operations

import (
	"openapi/pkg/models/shared"
)

type GetFulfillmentPolicyPathParams struct {
	FulfillmentPolicyID string `pathParam:"style=simple,explode=false,name=fulfillmentPolicyId"`
}

type GetFulfillmentPolicySecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetFulfillmentPolicyRequest struct {
	PathParams GetFulfillmentPolicyPathParams
	Security   GetFulfillmentPolicySecurity
}

type GetFulfillmentPolicyResponse struct {
	ContentType       string
	FulfillmentPolicy *shared.FulfillmentPolicy
	StatusCode        int64
}
