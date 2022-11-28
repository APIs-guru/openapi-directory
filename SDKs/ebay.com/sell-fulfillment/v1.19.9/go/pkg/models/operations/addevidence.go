package operations

import (
	"openapi/pkg/models/shared"
)

var AddEvidenceServerList = []string{
	"https://apiz.ebay.com{basePath}",
}

type AddEvidencePathParams struct {
	PaymentDisputeID string `pathParam:"style=simple,explode=false,name=payment_dispute_id"`
}

type AddEvidenceSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type AddEvidenceRequest struct {
	ServerURL  *string
	PathParams AddEvidencePathParams
	Request    *shared.AddEvidencePaymentDisputeRequest `request:"mediaType=application/json"`
	Security   AddEvidenceSecurity
}

type AddEvidenceResponse struct {
	AddEvidencePaymentDisputeResponse *shared.AddEvidencePaymentDisputeResponse
	ContentType                       string
	StatusCode                        int64
}
