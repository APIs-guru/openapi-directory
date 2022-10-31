package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsGetByNamePathParams struct {
	Org      string `pathParam:"style=simple,explode=false,name=org"`
	TeamSlug string `pathParam:"style=simple,explode=false,name=team_slug"`
}

type TeamsGetByNameRequest struct {
	PathParams TeamsGetByNamePathParams
}

type TeamsGetByNameResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
	TeamFull    *shared.TeamFull
}
