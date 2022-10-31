package operations

import (
"openapi/pkg/models/shared")

type CreateAdByListingIDPathParams struct {
    CampaignID string `pathParam:"style=simple,explode=false,name=campaign_id"`
    
}

type CreateAdByListingIDSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type CreateAdByListingIDRequest struct {
    PathParams CreateAdByListingIDPathParams 
    Request shared.CreateAdRequest `request:"mediaType=application/json"`
    Security CreateAdByListingIDSecurity 
    
}

type CreateAdByListingIDResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    CreateAdByListingID201ApplicationJSONObject map[string]interface{} 
    
}

