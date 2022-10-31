package operations

import (
"openapi/pkg/models/shared")

type ProjectsListForUserPathParams struct {
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}


type ProjectsListForUserStateEnum string

const (
    ProjectsListForUserStateEnumOpen ProjectsListForUserStateEnum = "open"
ProjectsListForUserStateEnumClosed ProjectsListForUserStateEnum = "closed"
ProjectsListForUserStateEnumAll ProjectsListForUserStateEnum = "all"
)


type ProjectsListForUserQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    State *ProjectsListForUserStateEnum `queryParam:"style=form,explode=true,name=state"`
    
}

type ProjectsListForUserRequest struct {
    PathParams ProjectsListForUserPathParams 
    QueryParams ProjectsListForUserQueryParams 
    
}

type ProjectsListForUser415ApplicationJSON struct {
    DocumentationURL string `json:"documentation_url"`
    Message string `json:"message"`
    
}

type ProjectsListForUserResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    Projects []shared.Project 
    ProjectsListForUser415ApplicationJSONObject *ProjectsListForUser415ApplicationJSON 
    ValidationError *shared.ValidationError 
    
}

