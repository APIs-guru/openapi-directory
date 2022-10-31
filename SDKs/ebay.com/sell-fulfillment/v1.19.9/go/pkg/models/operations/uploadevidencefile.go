package operations

import (
"openapi/pkg/models/shared")
var UploadEvidenceFileServers = []string{
	"https://apiz.ebay.com{basePath}",
}

type UploadEvidenceFilePathParams struct {
    PaymentDisputeID string `pathParam:"style=simple,explode=false,name=payment_dispute_id"`
    
}

type UploadEvidenceFileSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type UploadEvidenceFileRequest struct {
    ServerURL *string 
    PathParams UploadEvidenceFilePathParams 
    Security UploadEvidenceFileSecurity 
    
}

type UploadEvidenceFileResponse struct {
    ContentType string 
    FileEvidence *shared.FileEvidence 
    StatusCode int64 
    
}

