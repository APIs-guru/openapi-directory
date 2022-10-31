package operations

import (
"openapi/pkg/models/shared")

type ProjectsListColumnsPathParams struct {
    ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
    
}

type ProjectsListColumnsQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type ProjectsListColumnsRequest struct {
    PathParams ProjectsListColumnsPathParams 
    QueryParams ProjectsListColumnsQueryParams 
    
}

type ProjectsListColumnsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    ProjectColumns []shared.ProjectColumn 
    
}

