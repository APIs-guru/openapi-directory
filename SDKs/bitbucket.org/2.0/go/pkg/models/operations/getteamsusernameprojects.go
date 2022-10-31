package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamsUsernameProjectsPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type GetTeamsUsernameProjectsSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetTeamsUsernameProjectsSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetTeamsUsernameProjectsSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamsUsernameProjectsSecurity struct {
	Option1 *GetTeamsUsernameProjectsSecurityOption1 `security:"option"`
	Option2 *GetTeamsUsernameProjectsSecurityOption2 `security:"option"`
	Option3 *GetTeamsUsernameProjectsSecurityOption3 `security:"option"`
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
