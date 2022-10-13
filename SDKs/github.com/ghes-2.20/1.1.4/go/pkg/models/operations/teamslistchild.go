package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsListChildPathParams struct {
	TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsListChildQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type TeamsListChildRequest struct {
	PathParams  TeamsListChildPathParams
	QueryParams TeamsListChildQueryParams
}

type TeamsListChildResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Team2s      []shared.Team2
}
