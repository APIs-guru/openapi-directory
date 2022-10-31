package operations

import (
"openapi/pkg/models/shared")

type CreateCampaignSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type CreateCampaignRequest struct {
    Request shared.CreateCampaignRequest `request:"mediaType=application/json"`
    Security CreateCampaignSecurity 
    
}

type CreateCampaignResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    CreateCampaign201ApplicationJSONObject map[string]interface{} 
    
}

