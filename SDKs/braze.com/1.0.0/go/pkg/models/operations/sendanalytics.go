package operations



type SendAnalyticsQueryParams struct {
    CampaignID *string `queryParam:"style=form,explode=true,name=campaign_id"`
    EndingAt *string `queryParam:"style=form,explode=true,name=ending_at"`
    Length *string `queryParam:"style=form,explode=true,name=length"`
    SendID *string `queryParam:"style=form,explode=true,name=send_id"`
    
}

type SendAnalyticsRequest struct {
    QueryParams SendAnalyticsQueryParams 
    
}

type SendAnalyticsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

