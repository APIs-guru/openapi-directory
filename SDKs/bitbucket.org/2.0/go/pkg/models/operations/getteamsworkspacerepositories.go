package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamsWorkspaceRepositoriesPathParams struct {
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetTeamsWorkspaceRepositoriesSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamsWorkspaceRepositoriesRequest struct {
	PathParams GetTeamsWorkspaceRepositoriesPathParams
	Security   GetTeamsWorkspaceRepositoriesSecurity
}

type GetTeamsWorkspaceRepositoriesResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
