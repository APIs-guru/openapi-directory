package operations

import (
"openapi/pkg/models/shared")

type BulkCreateAdsByListingIDPathParams struct {
    CampaignID string `pathParam:"style=simple,explode=false,name=campaign_id"`
    
}

type BulkCreateAdsByListingIDSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type BulkCreateAdsByListingIDRequest struct {
    PathParams BulkCreateAdsByListingIDPathParams 
    Request shared.BulkCreateAdRequest `request:"mediaType=application/json"`
    Security BulkCreateAdsByListingIDSecurity 
    
}

type BulkCreateAdsByListingIDResponse struct {
    BulkAdResponse *shared.BulkAdResponse 
    ContentType string 
    StatusCode int64 
    
}

