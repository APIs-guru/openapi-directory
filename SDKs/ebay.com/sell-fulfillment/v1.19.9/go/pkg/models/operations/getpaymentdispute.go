package operations

import (
	"openapi/pkg/models/shared"
)

var GetPaymentDisputeServers = []string{
	"https://apiz.ebay.com{basePath}",
}

type GetPaymentDisputePathParams struct {
	PaymentDisputeID string `pathParam:"style=simple,explode=false,name=payment_dispute_id"`
}

type GetPaymentDisputeSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetPaymentDisputeRequest struct {
	ServerURL  *string
	PathParams GetPaymentDisputePathParams
	Security   GetPaymentDisputeSecurity
}

type GetPaymentDisputeResponse struct {
	ContentType    string
	PaymentDispute *shared.PaymentDispute
	StatusCode     int64
}
