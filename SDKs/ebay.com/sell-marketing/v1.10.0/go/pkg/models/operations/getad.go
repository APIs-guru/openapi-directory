package operations

import (
"openapi/pkg/models/shared")

type GetAdPathParams struct {
    AdID string `pathParam:"style=simple,explode=false,name=ad_id"`
    CampaignID string `pathParam:"style=simple,explode=false,name=campaign_id"`
    
}

type GetAdSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetAdRequest struct {
    PathParams GetAdPathParams 
    Security GetAdSecurity 
    
}

type GetAdResponse struct {
    Ad *shared.Ad 
    ContentType string 
    StatusCode int64 
    
}

