package operations

import (
"openapi/pkg/models/shared")

type BulkCreateAdsByInventoryReferencePathParams struct {
    CampaignID string `pathParam:"style=simple,explode=false,name=campaign_id"`
    
}

type BulkCreateAdsByInventoryReferenceSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type BulkCreateAdsByInventoryReferenceRequest struct {
    PathParams BulkCreateAdsByInventoryReferencePathParams 
    Request shared.BulkCreateAdsByInventoryReferenceRequest `request:"mediaType=application/json"`
    Security BulkCreateAdsByInventoryReferenceSecurity 
    
}

type BulkCreateAdsByInventoryReferenceResponse struct {
    BulkCreateAdsByInventoryReferenceResponse *shared.BulkCreateAdsByInventoryReferenceResponse 
    ContentType string 
    StatusCode int64 
    
}

