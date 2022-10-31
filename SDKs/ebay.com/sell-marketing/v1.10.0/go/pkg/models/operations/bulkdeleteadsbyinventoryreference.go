package operations

import (
"openapi/pkg/models/shared")

type BulkDeleteAdsByInventoryReferencePathParams struct {
    CampaignID string `pathParam:"style=simple,explode=false,name=campaign_id"`
    
}

type BulkDeleteAdsByInventoryReferenceSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type BulkDeleteAdsByInventoryReferenceRequest struct {
    PathParams BulkDeleteAdsByInventoryReferencePathParams 
    Request shared.BulkDeleteAdsByInventoryReferenceRequest `request:"mediaType=application/json"`
    Security BulkDeleteAdsByInventoryReferenceSecurity 
    
}

type BulkDeleteAdsByInventoryReferenceResponse struct {
    BulkDeleteAdsByInventoryReferenceResponse *shared.BulkDeleteAdsByInventoryReferenceResponse 
    ContentType string 
    StatusCode int64 
    
}

