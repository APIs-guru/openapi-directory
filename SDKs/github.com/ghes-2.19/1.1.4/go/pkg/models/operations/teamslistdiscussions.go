package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsListDiscussionsPathParams struct {
	TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsListDiscussionsDirectionEnum string

const (
	TeamsListDiscussionsDirectionEnumAsc  TeamsListDiscussionsDirectionEnum = "asc"
	TeamsListDiscussionsDirectionEnumDesc TeamsListDiscussionsDirectionEnum = "desc"
)

type TeamsListDiscussionsQueryParams struct {
	Direction *TeamsListDiscussionsDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Page      *int64                             `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64                             `queryParam:"style=form,explode=true,name=per_page"`
}

type TeamsListDiscussionsRequest struct {
	PathParams  TeamsListDiscussionsPathParams
	QueryParams TeamsListDiscussionsQueryParams
}

type TeamsListDiscussionsResponse struct {
	ContentType     string
	Headers         map[string][]string
	StatusCode      int64
	TeamDiscussions []shared.TeamDiscussion
}
