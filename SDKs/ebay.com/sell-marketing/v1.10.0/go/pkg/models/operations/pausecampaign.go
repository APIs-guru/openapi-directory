package operations

import (
"openapi/pkg/models/shared")

type PauseCampaignPathParams struct {
    CampaignID string `pathParam:"style=simple,explode=false,name=campaign_id"`
    
}

type PauseCampaignSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type PauseCampaignRequest struct {
    PathParams PauseCampaignPathParams 
    Security PauseCampaignSecurity 
    
}

type PauseCampaignResponse struct {
    ContentType string 
    StatusCode int64 
    
}

