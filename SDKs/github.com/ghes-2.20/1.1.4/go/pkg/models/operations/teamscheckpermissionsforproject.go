package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsCheckPermissionsForProjectPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
	TeamID    int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsCheckPermissionsForProjectHeaders struct {
	Accept string `header:"name=accept"`
}

type TeamsCheckPermissionsForProjectRequest struct {
	PathParams TeamsCheckPermissionsForProjectPathParams
	Headers    TeamsCheckPermissionsForProjectHeaders
}

type TeamsCheckPermissionsForProjectResponse struct {
	ContentType string
	StatusCode  int64
	TeamProject *shared.TeamProject
}
