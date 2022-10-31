package operations

import (
"openapi/pkg/models/shared")

type PullsListPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}


type PullsListDirectionEnum string

const (
    PullsListDirectionEnumAsc PullsListDirectionEnum = "asc"
PullsListDirectionEnumDesc PullsListDirectionEnum = "desc"
)



type PullsListSortEnum string

const (
    PullsListSortEnumCreated PullsListSortEnum = "created"
PullsListSortEnumUpdated PullsListSortEnum = "updated"
PullsListSortEnumPopularity PullsListSortEnum = "popularity"
PullsListSortEnumLongRunning PullsListSortEnum = "long-running"
)



type PullsListStateEnum string

const (
    PullsListStateEnumOpen PullsListStateEnum = "open"
PullsListStateEnumClosed PullsListStateEnum = "closed"
PullsListStateEnumAll PullsListStateEnum = "all"
)


type PullsListQueryParams struct {
    Base *string `queryParam:"style=form,explode=true,name=base"`
    Direction *PullsListDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Head *string `queryParam:"style=form,explode=true,name=head"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    Sort *PullsListSortEnum `queryParam:"style=form,explode=true,name=sort"`
    State *PullsListStateEnum `queryParam:"style=form,explode=true,name=state"`
    
}

type PullsListRequest struct {
    PathParams PullsListPathParams 
    QueryParams PullsListQueryParams 
    
}

type PullsListResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    PullRequestSimples []shared.PullRequestSimple 
    ValidationError *shared.ValidationError 
    
}

