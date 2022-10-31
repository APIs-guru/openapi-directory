package operations

import (
	"openapi/pkg/models/shared"
)

var ContestPaymentDisputeServers = []string{
	"https://apiz.ebay.com{basePath}",
}

type ContestPaymentDisputePathParams struct {
	PaymentDisputeID string `pathParam:"style=simple,explode=false,name=payment_dispute_id"`
}

type ContestPaymentDisputeSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type ContestPaymentDisputeRequest struct {
	ServerURL  *string
	PathParams ContestPaymentDisputePathParams
	Request    *shared.ContestPaymentDisputeRequest `request:"mediaType=application/json"`
	Security   ContestPaymentDisputeSecurity
}

type ContestPaymentDisputeResponse struct {
	ContentType string
	StatusCode  int64
}
