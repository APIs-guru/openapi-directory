package operations

import (
"openapi/pkg/models/shared")

type BulkUpdateAdsBidByInventoryReferencePathParams struct {
    CampaignID string `pathParam:"style=simple,explode=false,name=campaign_id"`
    
}

type BulkUpdateAdsBidByInventoryReferenceSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type BulkUpdateAdsBidByInventoryReferenceRequest struct {
    PathParams BulkUpdateAdsBidByInventoryReferencePathParams 
    Request shared.BulkCreateAdsByInventoryReferenceRequest `request:"mediaType=application/json"`
    Security BulkUpdateAdsBidByInventoryReferenceSecurity 
    
}

type BulkUpdateAdsBidByInventoryReferenceResponse struct {
    BulkCreateAdsByInventoryReferenceResponse *shared.BulkCreateAdsByInventoryReferenceResponse 
    ContentType string 
    StatusCode int64 
    
}

