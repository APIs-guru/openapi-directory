package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsCheckPermissionsForRepoLegacyPathParams struct {
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
	TeamID int64  `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsCheckPermissionsForRepoLegacyRequest struct {
	PathParams TeamsCheckPermissionsForRepoLegacyPathParams
}

type TeamsCheckPermissionsForRepoLegacyResponse struct {
	ContentType    string
	StatusCode     int64
	TeamRepository *shared.TeamRepository
}
