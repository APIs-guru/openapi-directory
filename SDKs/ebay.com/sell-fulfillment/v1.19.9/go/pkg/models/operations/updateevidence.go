package operations

import (
"openapi/pkg/models/shared")
var UpdateEvidenceServers = []string{
	"https://apiz.ebay.com{basePath}",
}

type UpdateEvidencePathParams struct {
    PaymentDisputeID string `pathParam:"style=simple,explode=false,name=payment_dispute_id"`
    
}

type UpdateEvidenceSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type UpdateEvidenceRequest struct {
    ServerURL *string 
    PathParams UpdateEvidencePathParams 
    Request *shared.UpdateEvidencePaymentDisputeRequest `request:"mediaType=application/json"`
    Security UpdateEvidenceSecurity 
    
}

type UpdateEvidenceResponse struct {
    ContentType string 
    StatusCode int64 
    
}

