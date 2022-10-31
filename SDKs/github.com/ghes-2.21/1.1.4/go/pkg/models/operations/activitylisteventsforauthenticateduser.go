package operations

import (
"openapi/pkg/models/shared")

type ActivityListEventsForAuthenticatedUserPathParams struct {
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type ActivityListEventsForAuthenticatedUserQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type ActivityListEventsForAuthenticatedUserRequest struct {
    PathParams ActivityListEventsForAuthenticatedUserPathParams 
    QueryParams ActivityListEventsForAuthenticatedUserQueryParams 
    
}

type ActivityListEventsForAuthenticatedUserResponse struct {
    ContentType string 
    StatusCode int64 
    Events []shared.Event 
    
}

