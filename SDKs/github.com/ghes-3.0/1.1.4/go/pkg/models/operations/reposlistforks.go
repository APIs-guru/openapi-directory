package operations

import (
"openapi/pkg/models/shared")

type ReposListForksPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}


type ReposListForksSortEnum string

const (
    ReposListForksSortEnumNewest ReposListForksSortEnum = "newest"
ReposListForksSortEnumOldest ReposListForksSortEnum = "oldest"
ReposListForksSortEnumStargazers ReposListForksSortEnum = "stargazers"
ReposListForksSortEnumWatchers ReposListForksSortEnum = "watchers"
)


type ReposListForksQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    Sort *ReposListForksSortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type ReposListForksRequest struct {
    PathParams ReposListForksPathParams 
    QueryParams ReposListForksQueryParams 
    
}

type ReposListForksResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    MinimalRepositories []shared.MinimalRepository 
    ScimError *shared.ScimError 
    
}

