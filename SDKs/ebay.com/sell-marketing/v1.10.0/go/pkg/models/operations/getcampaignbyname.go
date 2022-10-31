package operations

import (
"openapi/pkg/models/shared")

type GetCampaignByNameQueryParams struct {
    CampaignName string `queryParam:"style=form,explode=true,name=campaign_name"`
    
}

type GetCampaignByNameSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetCampaignByNameRequest struct {
    QueryParams GetCampaignByNameQueryParams 
    Security GetCampaignByNameSecurity 
    
}

type GetCampaignByNameResponse struct {
    Campaign *shared.Campaign 
    ContentType string 
    StatusCode int64 
    
}

