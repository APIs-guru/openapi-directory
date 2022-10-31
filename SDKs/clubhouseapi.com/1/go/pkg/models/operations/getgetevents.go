package operations



type GetGetEventsQueryParams struct {
    IsFiltered *bool `queryParam:"style=form,explode=true,name=is_filtered"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
    
}

type GetGetEventsRequest struct {
    QueryParams GetGetEventsQueryParams 
    
}

type GetGetEventsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

