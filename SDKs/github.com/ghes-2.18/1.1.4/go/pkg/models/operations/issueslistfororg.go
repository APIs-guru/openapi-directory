package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type IssuesListForOrgPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type IssuesListForOrgFilterEnum string

const (
	IssuesListForOrgFilterEnumAssigned   IssuesListForOrgFilterEnum = "assigned"
	IssuesListForOrgFilterEnumCreated    IssuesListForOrgFilterEnum = "created"
	IssuesListForOrgFilterEnumMentioned  IssuesListForOrgFilterEnum = "mentioned"
	IssuesListForOrgFilterEnumSubscribed IssuesListForOrgFilterEnum = "subscribed"
	IssuesListForOrgFilterEnumRepos      IssuesListForOrgFilterEnum = "repos"
	IssuesListForOrgFilterEnumAll        IssuesListForOrgFilterEnum = "all"
)

type IssuesListForOrgSortEnum string

const (
	IssuesListForOrgSortEnumCreated  IssuesListForOrgSortEnum = "created"
	IssuesListForOrgSortEnumUpdated  IssuesListForOrgSortEnum = "updated"
	IssuesListForOrgSortEnumComments IssuesListForOrgSortEnum = "comments"
)

type IssuesListForOrgStateEnum string

const (
	IssuesListForOrgStateEnumOpen   IssuesListForOrgStateEnum = "open"
	IssuesListForOrgStateEnumClosed IssuesListForOrgStateEnum = "closed"
	IssuesListForOrgStateEnumAll    IssuesListForOrgStateEnum = "all"
)

type IssuesListForOrgQueryParams struct {
	Direction *shared.DirectionEnum       `queryParam:"style=form,explode=true,name=direction"`
	Filter    *IssuesListForOrgFilterEnum `queryParam:"style=form,explode=true,name=filter"`
	Labels    *string                     `queryParam:"style=form,explode=true,name=labels"`
	Page      *int64                      `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64                      `queryParam:"style=form,explode=true,name=per_page"`
	Since     *time.Time                  `queryParam:"style=form,explode=true,name=since"`
	Sort      *IssuesListForOrgSortEnum   `queryParam:"style=form,explode=true,name=sort"`
	State     *IssuesListForOrgStateEnum  `queryParam:"style=form,explode=true,name=state"`
}

type IssuesListForOrgRequest struct {
	PathParams  IssuesListForOrgPathParams
	QueryParams IssuesListForOrgQueryParams
}

type IssuesListForOrgResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	BasicError  *shared.BasicError
	Issues      []shared.Issue
}
