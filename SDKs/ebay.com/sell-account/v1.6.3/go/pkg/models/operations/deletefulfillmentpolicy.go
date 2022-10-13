package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteFulfillmentPolicyPathParams struct {
	FulfillmentPolicyID string `pathParam:"style=simple,explode=false,name=fulfillmentPolicyId"`
}

type DeleteFulfillmentPolicySecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type DeleteFulfillmentPolicyRequest struct {
	PathParams DeleteFulfillmentPolicyPathParams
	Security   DeleteFulfillmentPolicySecurity
}

type DeleteFulfillmentPolicyResponse struct {
	ContentType string
	StatusCode  int64
}
