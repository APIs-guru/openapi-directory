package operations

import (
"openapi/pkg/models/shared")

type ActivityListOrgEventsForAuthenticatedUserPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type ActivityListOrgEventsForAuthenticatedUserQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type ActivityListOrgEventsForAuthenticatedUserRequest struct {
    PathParams ActivityListOrgEventsForAuthenticatedUserPathParams 
    QueryParams ActivityListOrgEventsForAuthenticatedUserQueryParams 
    
}

type ActivityListOrgEventsForAuthenticatedUserResponse struct {
    ContentType string 
    StatusCode int64 
    Events []shared.Event 
    
}

