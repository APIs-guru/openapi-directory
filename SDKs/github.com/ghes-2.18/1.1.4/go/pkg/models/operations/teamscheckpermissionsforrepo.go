package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsCheckPermissionsForRepoPathParams struct {
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
	TeamID int64  `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsCheckPermissionsForRepoRequest struct {
	PathParams TeamsCheckPermissionsForRepoPathParams
}

type TeamsCheckPermissionsForRepoResponse struct {
	ContentType       string
	StatusCode        int64
	FullRepository    *shared.FullRepository
	MinimalRepository *shared.MinimalRepository
}
