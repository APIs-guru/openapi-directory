package operations

import (
	"openapi/pkg/models/shared"
)

type ProjectsListForOrgPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type ProjectsListForOrgStateEnum string

const (
	ProjectsListForOrgStateEnumOpen   ProjectsListForOrgStateEnum = "open"
	ProjectsListForOrgStateEnumClosed ProjectsListForOrgStateEnum = "closed"
	ProjectsListForOrgStateEnumAll    ProjectsListForOrgStateEnum = "all"
)

type ProjectsListForOrgQueryParams struct {
	Page    *int64                       `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64                       `queryParam:"style=form,explode=true,name=per_page"`
	State   *ProjectsListForOrgStateEnum `queryParam:"style=form,explode=true,name=state"`
}

type ProjectsListForOrgRequest struct {
	PathParams  ProjectsListForOrgPathParams
	QueryParams ProjectsListForOrgQueryParams
}

type ProjectsListForOrgResponse struct {
	ContentType           string
	Headers               map[string][]string
	StatusCode            int64
	Projects              []shared.Project
	ValidationErrorSimple *shared.ValidationErrorSimple
}
