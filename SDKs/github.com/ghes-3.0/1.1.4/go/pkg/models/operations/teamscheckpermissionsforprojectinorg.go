package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsCheckPermissionsForProjectInOrgPathParams struct {
	Org       string `pathParam:"style=simple,explode=false,name=org"`
	ProjectID int64  `pathParam:"style=simple,explode=false,name=project_id"`
	TeamSlug  string `pathParam:"style=simple,explode=false,name=team_slug"`
}

type TeamsCheckPermissionsForProjectInOrgRequest struct {
	PathParams TeamsCheckPermissionsForProjectInOrgPathParams
}

type TeamsCheckPermissionsForProjectInOrgResponse struct {
	ContentType string
	StatusCode  int64
	TeamProject *shared.TeamProject
}
