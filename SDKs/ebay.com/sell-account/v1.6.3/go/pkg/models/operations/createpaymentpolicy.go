package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePaymentPolicySecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type CreatePaymentPolicyRequest struct {
	Request  shared.PaymentPolicyRequest `request:"mediaType=application/json"`
	Security CreatePaymentPolicySecurity
}

type CreatePaymentPolicyResponse struct {
	ContentType              string
	Headers                  map[string][]string
	SetPaymentPolicyResponse *shared.SetPaymentPolicyResponse
	StatusCode               int64
}
