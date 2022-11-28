package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsCheckPermissionsForProjectLegacyPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
	TeamID    int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsCheckPermissionsForProjectLegacy415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type TeamsCheckPermissionsForProjectLegacyRequest struct {
	PathParams TeamsCheckPermissionsForProjectLegacyPathParams
}

type TeamsCheckPermissionsForProjectLegacyResponse struct {
	ContentType                                                   string
	StatusCode                                                    int64
	TeamProject                                                   *shared.TeamProject
	TeamsCheckPermissionsForProjectLegacy415ApplicationJSONObject *TeamsCheckPermissionsForProjectLegacy415ApplicationJSON
}
