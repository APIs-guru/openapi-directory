package operations

import (
	"openapi/pkg/models/shared"
)

var AcceptPaymentDisputeServerList = []string{
	"https://apiz.ebay.com{basePath}",
}

type AcceptPaymentDisputePathParams struct {
	PaymentDisputeID string `pathParam:"style=simple,explode=false,name=payment_dispute_id"`
}

type AcceptPaymentDisputeSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type AcceptPaymentDisputeRequest struct {
	ServerURL  *string
	PathParams AcceptPaymentDisputePathParams
	Request    *shared.AcceptPaymentDisputeRequest `request:"mediaType=application/json"`
	Security   AcceptPaymentDisputeSecurity
}

type AcceptPaymentDisputeResponse struct {
	ContentType string
	StatusCode  int64
}
