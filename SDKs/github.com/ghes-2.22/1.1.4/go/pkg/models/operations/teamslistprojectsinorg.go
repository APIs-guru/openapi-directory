package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsListProjectsInOrgPathParams struct {
	Org      string `pathParam:"style=simple,explode=false,name=org"`
	TeamSlug string `pathParam:"style=simple,explode=false,name=team_slug"`
}

type TeamsListProjectsInOrgQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type TeamsListProjectsInOrgRequest struct {
	PathParams  TeamsListProjectsInOrgPathParams
	QueryParams TeamsListProjectsInOrgQueryParams
}

type TeamsListProjectsInOrgResponse struct {
	ContentType  string
	Headers      map[string][]string
	StatusCode   int64
	TeamProjects []shared.TeamProject
}
