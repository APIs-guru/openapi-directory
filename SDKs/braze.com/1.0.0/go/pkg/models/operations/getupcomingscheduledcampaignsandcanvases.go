package operations



type GetUpcomingScheduledCampaignsAndCanvasesQueryParams struct {
    EndTime *string `queryParam:"style=form,explode=true,name=end_time"`
    
}

type GetUpcomingScheduledCampaignsAndCanvasesRequest struct {
    QueryParams GetUpcomingScheduledCampaignsAndCanvasesQueryParams 
    
}

type GetUpcomingScheduledCampaignsAndCanvasesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

