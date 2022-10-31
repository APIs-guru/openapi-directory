package operations



type SegmentAnalyticsQueryParams struct {
    EndingAt *string `queryParam:"style=form,explode=true,name=ending_at"`
    Length *string `queryParam:"style=form,explode=true,name=length"`
    SegmentID *string `queryParam:"style=form,explode=true,name=segment_id"`
    
}

type SegmentAnalyticsRequest struct {
    QueryParams SegmentAnalyticsQueryParams 
    
}

type SegmentAnalyticsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

