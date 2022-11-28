package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsRemoveProjectLegacyPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
	TeamID    int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsRemoveProjectLegacy415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type TeamsRemoveProjectLegacyRequest struct {
	PathParams TeamsRemoveProjectLegacyPathParams
}

type TeamsRemoveProjectLegacyResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	BasicError                                       *shared.BasicError
	TeamsRemoveProjectLegacy415ApplicationJSONObject *TeamsRemoveProjectLegacy415ApplicationJSON
	ValidationError                                  *shared.ValidationError
}
