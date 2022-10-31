package operations



type NewsFeedCardAnalyticsQueryParams struct {
    CardID *string `queryParam:"style=form,explode=true,name=card_id"`
    EndingAt *string `queryParam:"style=form,explode=true,name=ending_at"`
    Length *string `queryParam:"style=form,explode=true,name=length"`
    Unit *string `queryParam:"style=form,explode=true,name=unit"`
    
}

type NewsFeedCardAnalyticsRequest struct {
    QueryParams NewsFeedCardAnalyticsQueryParams 
    
}

type NewsFeedCardAnalyticsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

