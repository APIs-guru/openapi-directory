package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsListProjectsPathParams struct {
	TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsListProjectsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type TeamsListProjectsHeaders struct {
	Accept string `header:"name=accept"`
}

type TeamsListProjectsRequest struct {
	PathParams  TeamsListProjectsPathParams
	QueryParams TeamsListProjectsQueryParams
	Headers     TeamsListProjectsHeaders
}

type TeamsListProjectsResponse struct {
	ContentType  string
	Headers      map[string][]string
	StatusCode   int64
	TeamProjects []shared.TeamProject
}
