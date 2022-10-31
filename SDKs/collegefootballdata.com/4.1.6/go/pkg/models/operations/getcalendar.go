package operations

import (
"openapi/pkg/models/shared")

type GetCalendarQueryParams struct {
    Year int64 `queryParam:"style=form,explode=true,name=year"`
    
}

type GetCalendarRequest struct {
    QueryParams GetCalendarQueryParams 
    
}

type GetCalendarResponse struct {
    ContentType string 
    StatusCode int64 
    Weeks []shared.Week 
    
}

