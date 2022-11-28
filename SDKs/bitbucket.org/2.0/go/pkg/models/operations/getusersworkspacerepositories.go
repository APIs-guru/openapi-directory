package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersWorkspaceRepositoriesPathParams struct {
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetUsersWorkspaceRepositoriesSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetUsersWorkspaceRepositoriesRequest struct {
	PathParams GetUsersWorkspaceRepositoriesPathParams
	Security   GetUsersWorkspaceRepositoriesSecurity
}

type GetUsersWorkspaceRepositoriesResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
