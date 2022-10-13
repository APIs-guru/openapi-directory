package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFulfillmentPolicyPathParams struct {
	FulfillmentPolicyID string `pathParam:"style=simple,explode=false,name=fulfillmentPolicyId"`
}

type UpdateFulfillmentPolicySecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type UpdateFulfillmentPolicyRequest struct {
	PathParams UpdateFulfillmentPolicyPathParams
	Request    shared.FulfillmentPolicyRequest `request:"mediaType=application/json"`
	Security   UpdateFulfillmentPolicySecurity
}

type UpdateFulfillmentPolicyResponse struct {
	ContentType                  string
	SetFulfillmentPolicyResponse *shared.SetFulfillmentPolicyResponse
	StatusCode                   int64
}
