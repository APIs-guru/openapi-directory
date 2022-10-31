package operations

import (
"openapi/pkg/models/shared")

type GetCampaignsQueryParams struct {
    CampaignName *string `queryParam:"style=form,explode=true,name=campaign_name"`
    CampaignStatus *string `queryParam:"style=form,explode=true,name=campaign_status"`
    EndDateRange *string `queryParam:"style=form,explode=true,name=end_date_range"`
    Limit *string `queryParam:"style=form,explode=true,name=limit"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    StartDateRange *string `queryParam:"style=form,explode=true,name=start_date_range"`
    
}

type GetCampaignsSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetCampaignsRequest struct {
    QueryParams GetCampaignsQueryParams 
    Security GetCampaignsSecurity 
    
}

type GetCampaignsResponse struct {
    CampaignPagedCollection *shared.CampaignPagedCollection 
    ContentType string 
    StatusCode int64 
    
}

