package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFulfillmentPolicySecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type CreateFulfillmentPolicyRequest struct {
	Request  shared.FulfillmentPolicyRequest `request:"mediaType=application/json"`
	Security CreateFulfillmentPolicySecurity
}

type CreateFulfillmentPolicyResponse struct {
	ContentType                  string
	Headers                      map[string][]string
	SetFulfillmentPolicyResponse *shared.SetFulfillmentPolicyResponse
	StatusCode                   int64
}
