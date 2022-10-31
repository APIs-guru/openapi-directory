package operations

import (
"openapi/pkg/models/shared")

type CloneCampaignPathParams struct {
    CampaignID string `pathParam:"style=simple,explode=false,name=campaign_id"`
    
}

type CloneCampaignSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type CloneCampaignRequest struct {
    PathParams CloneCampaignPathParams 
    Request shared.CloneCampaignRequest `request:"mediaType=application/json"`
    Security CloneCampaignSecurity 
    
}

type CloneCampaignResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    CloneCampaign201ApplicationJSONObject map[string]interface{} 
    
}

