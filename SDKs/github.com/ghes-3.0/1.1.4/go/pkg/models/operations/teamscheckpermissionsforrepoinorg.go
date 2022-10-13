package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsCheckPermissionsForRepoInOrgPathParams struct {
	Org      string `pathParam:"style=simple,explode=false,name=org"`
	Owner    string `pathParam:"style=simple,explode=false,name=owner"`
	Repo     string `pathParam:"style=simple,explode=false,name=repo"`
	TeamSlug string `pathParam:"style=simple,explode=false,name=team_slug"`
}

type TeamsCheckPermissionsForRepoInOrgRequest struct {
	PathParams TeamsCheckPermissionsForRepoInOrgPathParams
}

type TeamsCheckPermissionsForRepoInOrgResponse struct {
	ContentType    string
	StatusCode     int64
	TeamRepository *shared.TeamRepository
}
