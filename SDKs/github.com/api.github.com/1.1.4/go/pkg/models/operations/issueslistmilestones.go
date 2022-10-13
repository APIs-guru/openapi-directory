package operations

import (
	"openapi/pkg/models/shared"
)

type IssuesListMilestonesPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type IssuesListMilestonesDirectionEnum string

const (
	IssuesListMilestonesDirectionEnumAsc  IssuesListMilestonesDirectionEnum = "asc"
	IssuesListMilestonesDirectionEnumDesc IssuesListMilestonesDirectionEnum = "desc"
)

type IssuesListMilestonesSortEnum string

const (
	IssuesListMilestonesSortEnumDueOn        IssuesListMilestonesSortEnum = "due_on"
	IssuesListMilestonesSortEnumCompleteness IssuesListMilestonesSortEnum = "completeness"
)

type IssuesListMilestonesStateEnum string

const (
	IssuesListMilestonesStateEnumOpen   IssuesListMilestonesStateEnum = "open"
	IssuesListMilestonesStateEnumClosed IssuesListMilestonesStateEnum = "closed"
	IssuesListMilestonesStateEnumAll    IssuesListMilestonesStateEnum = "all"
)

type IssuesListMilestonesQueryParams struct {
	Direction *IssuesListMilestonesDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Page      *int64                             `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64                             `queryParam:"style=form,explode=true,name=per_page"`
	Sort      *IssuesListMilestonesSortEnum      `queryParam:"style=form,explode=true,name=sort"`
	State     *IssuesListMilestonesStateEnum     `queryParam:"style=form,explode=true,name=state"`
}

type IssuesListMilestonesRequest struct {
	PathParams  IssuesListMilestonesPathParams
	QueryParams IssuesListMilestonesQueryParams
}

type IssuesListMilestonesResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	BasicError  *shared.BasicError
	Milestones  []shared.Milestone
}
