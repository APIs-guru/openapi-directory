package operations

import (
"openapi/pkg/models/shared")

type GetCampaignPathParams struct {
    CampaignID string `pathParam:"style=simple,explode=false,name=campaign_id"`
    
}

type GetCampaignSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetCampaignRequest struct {
    PathParams GetCampaignPathParams 
    Security GetCampaignSecurity 
    
}

type GetCampaignResponse struct {
    Campaign *shared.Campaign 
    ContentType string 
    StatusCode int64 
    
}

