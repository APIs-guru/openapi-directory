package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamsUsernameProjectsPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type GetTeamsUsernameProjectsSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamsUsernameProjectsRequest struct {
	PathParams GetTeamsUsernameProjectsPathParams
	Security   GetTeamsUsernameProjectsSecurity
}

type GetTeamsUsernameProjectsResponse struct {
	ContentType       string
	StatusCode        int64
	Error             map[string]interface{}
	PaginatedProjects *shared.PaginatedProjects
}
