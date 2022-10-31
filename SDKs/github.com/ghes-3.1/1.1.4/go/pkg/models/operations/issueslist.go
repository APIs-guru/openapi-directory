package operations

import (
"time"
"openapi/pkg/models/shared")


type IssuesListFilterEnum string

const (
    IssuesListFilterEnumAssigned IssuesListFilterEnum = "assigned"
IssuesListFilterEnumCreated IssuesListFilterEnum = "created"
IssuesListFilterEnumMentioned IssuesListFilterEnum = "mentioned"
IssuesListFilterEnumSubscribed IssuesListFilterEnum = "subscribed"
IssuesListFilterEnumRepos IssuesListFilterEnum = "repos"
IssuesListFilterEnumAll IssuesListFilterEnum = "all"
)



type IssuesListSortEnum string

const (
    IssuesListSortEnumCreated IssuesListSortEnum = "created"
IssuesListSortEnumUpdated IssuesListSortEnum = "updated"
IssuesListSortEnumComments IssuesListSortEnum = "comments"
)



type IssuesListStateEnum string

const (
    IssuesListStateEnumOpen IssuesListStateEnum = "open"
IssuesListStateEnumClosed IssuesListStateEnum = "closed"
IssuesListStateEnumAll IssuesListStateEnum = "all"
)


type IssuesListQueryParams struct {
    Collab *bool `queryParam:"style=form,explode=true,name=collab"`
    Direction *shared.DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Filter *IssuesListFilterEnum `queryParam:"style=form,explode=true,name=filter"`
    Labels *string `queryParam:"style=form,explode=true,name=labels"`
    Orgs *bool `queryParam:"style=form,explode=true,name=orgs"`
    Owned *bool `queryParam:"style=form,explode=true,name=owned"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    Pulls *bool `queryParam:"style=form,explode=true,name=pulls"`
    Since *time.Time `queryParam:"style=form,explode=true,name=since"`
    Sort *IssuesListSortEnum `queryParam:"style=form,explode=true,name=sort"`
    State *IssuesListStateEnum `queryParam:"style=form,explode=true,name=state"`
    
}

type IssuesListRequest struct {
    QueryParams IssuesListQueryParams 
    
}

type IssuesListResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    Issues []shared.Issue 
    ValidationError *shared.ValidationError 
    
}

