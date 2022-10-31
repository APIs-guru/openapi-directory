package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsListProjectsLegacyPathParams struct {
	TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsListProjectsLegacyQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type TeamsListProjectsLegacyRequest struct {
	PathParams  TeamsListProjectsLegacyPathParams
	QueryParams TeamsListProjectsLegacyQueryParams
}

type TeamsListProjectsLegacy415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type TeamsListProjectsLegacyResponse struct {
	ContentType                                     string
	Headers                                         map[string][]string
	StatusCode                                      int64
	BasicError                                      *shared.BasicError
	TeamProjects                                    []shared.TeamProject
	TeamsListProjectsLegacy415ApplicationJSONObject *TeamsListProjectsLegacy415ApplicationJSON
}
