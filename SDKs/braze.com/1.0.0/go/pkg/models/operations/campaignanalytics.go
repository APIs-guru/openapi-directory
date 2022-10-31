package operations



type CampaignAnalyticsQueryParams struct {
    CampaignID *string `queryParam:"style=form,explode=true,name=campaign_id"`
    EndingAt *string `queryParam:"style=form,explode=true,name=ending_at"`
    Length *string `queryParam:"style=form,explode=true,name=length"`
    
}

type CampaignAnalyticsRequest struct {
    QueryParams CampaignAnalyticsQueryParams 
    
}

type CampaignAnalyticsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

