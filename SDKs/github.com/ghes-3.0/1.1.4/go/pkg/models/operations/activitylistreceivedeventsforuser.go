package operations

import (
"openapi/pkg/models/shared")

type ActivityListReceivedEventsForUserPathParams struct {
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type ActivityListReceivedEventsForUserQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type ActivityListReceivedEventsForUserRequest struct {
    PathParams ActivityListReceivedEventsForUserPathParams 
    QueryParams ActivityListReceivedEventsForUserQueryParams 
    
}

type ActivityListReceivedEventsForUserResponse struct {
    ContentType string 
    StatusCode int64 
    Events []shared.Event 
    
}

