package operations

import (
"time"
"openapi/pkg/models/shared")


type IssuesListForAuthenticatedUserFilterEnum string

const (
    IssuesListForAuthenticatedUserFilterEnumAssigned IssuesListForAuthenticatedUserFilterEnum = "assigned"
IssuesListForAuthenticatedUserFilterEnumCreated IssuesListForAuthenticatedUserFilterEnum = "created"
IssuesListForAuthenticatedUserFilterEnumMentioned IssuesListForAuthenticatedUserFilterEnum = "mentioned"
IssuesListForAuthenticatedUserFilterEnumSubscribed IssuesListForAuthenticatedUserFilterEnum = "subscribed"
IssuesListForAuthenticatedUserFilterEnumRepos IssuesListForAuthenticatedUserFilterEnum = "repos"
IssuesListForAuthenticatedUserFilterEnumAll IssuesListForAuthenticatedUserFilterEnum = "all"
)



type IssuesListForAuthenticatedUserSortEnum string

const (
    IssuesListForAuthenticatedUserSortEnumCreated IssuesListForAuthenticatedUserSortEnum = "created"
IssuesListForAuthenticatedUserSortEnumUpdated IssuesListForAuthenticatedUserSortEnum = "updated"
IssuesListForAuthenticatedUserSortEnumComments IssuesListForAuthenticatedUserSortEnum = "comments"
)



type IssuesListForAuthenticatedUserStateEnum string

const (
    IssuesListForAuthenticatedUserStateEnumOpen IssuesListForAuthenticatedUserStateEnum = "open"
IssuesListForAuthenticatedUserStateEnumClosed IssuesListForAuthenticatedUserStateEnum = "closed"
IssuesListForAuthenticatedUserStateEnumAll IssuesListForAuthenticatedUserStateEnum = "all"
)


type IssuesListForAuthenticatedUserQueryParams struct {
    Direction *shared.DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Filter *IssuesListForAuthenticatedUserFilterEnum `queryParam:"style=form,explode=true,name=filter"`
    Labels *string `queryParam:"style=form,explode=true,name=labels"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    Since *time.Time `queryParam:"style=form,explode=true,name=since"`
    Sort *IssuesListForAuthenticatedUserSortEnum `queryParam:"style=form,explode=true,name=sort"`
    State *IssuesListForAuthenticatedUserStateEnum `queryParam:"style=form,explode=true,name=state"`
    
}

type IssuesListForAuthenticatedUserRequest struct {
    QueryParams IssuesListForAuthenticatedUserQueryParams 
    
}

type IssuesListForAuthenticatedUserResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    Issues []shared.Issue 
    
}

