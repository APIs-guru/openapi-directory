package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsGetLegacyPathParams struct {
	TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsGetLegacyRequest struct {
	PathParams TeamsGetLegacyPathParams
}

type TeamsGetLegacyResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
	TeamFull    *shared.TeamFull
}
