package operations

import (
"openapi/pkg/models/shared")

type ResumeCampaignPathParams struct {
    CampaignID string `pathParam:"style=simple,explode=false,name=campaign_id"`
    
}

type ResumeCampaignSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type ResumeCampaignRequest struct {
    PathParams ResumeCampaignPathParams 
    Security ResumeCampaignSecurity 
    
}

type ResumeCampaignResponse struct {
    ContentType string 
    StatusCode int64 
    
}

