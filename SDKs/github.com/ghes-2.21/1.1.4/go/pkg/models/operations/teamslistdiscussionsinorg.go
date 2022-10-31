package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsListDiscussionsInOrgPathParams struct {
	Org      string `pathParam:"style=simple,explode=false,name=org"`
	TeamSlug string `pathParam:"style=simple,explode=false,name=team_slug"`
}

type TeamsListDiscussionsInOrgQueryParams struct {
	Direction *shared.DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Page      *int64                `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64                `queryParam:"style=form,explode=true,name=per_page"`
	Pinned    *string               `queryParam:"style=form,explode=true,name=pinned"`
}

type TeamsListDiscussionsInOrgRequest struct {
	PathParams  TeamsListDiscussionsInOrgPathParams
	QueryParams TeamsListDiscussionsInOrgQueryParams
}

type TeamsListDiscussionsInOrgResponse struct {
	ContentType     string
	Headers         map[string][]string
	StatusCode      int64
	TeamDiscussions []shared.TeamDiscussion
}
