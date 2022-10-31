package operations



type SegmentListQueryParams struct {
    Page *string `queryParam:"style=form,explode=true,name=page"`
    SortDirection *string `queryParam:"style=form,explode=true,name=sort_direction"`
    
}

type SegmentListRequest struct {
    QueryParams SegmentListQueryParams 
    
}

type SegmentListResponse struct {
    ContentType string 
    StatusCode int64 
    
}

