package operations

import (
"openapi/pkg/models/shared")

type ActivityListStargazersForRepoPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ActivityListStargazersForRepoQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type ActivityListStargazersForRepoRequest struct {
    PathParams ActivityListStargazersForRepoPathParams 
    QueryParams ActivityListStargazersForRepoQueryParams 
    
}

type ActivityListStargazersForRepoResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    SimpleUsers []shared.SimpleUser 
    Stargazers []shared.Stargazer 
    ValidationError *shared.ValidationError 
    
}

