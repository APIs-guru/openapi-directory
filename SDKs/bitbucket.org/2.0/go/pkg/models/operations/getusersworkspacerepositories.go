package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersWorkspaceRepositoriesPathParams struct {
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetUsersWorkspaceRepositoriesSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetUsersWorkspaceRepositoriesSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetUsersWorkspaceRepositoriesSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetUsersWorkspaceRepositoriesSecurity struct {
	Option1 *GetUsersWorkspaceRepositoriesSecurityOption1 `security:"option"`
	Option2 *GetUsersWorkspaceRepositoriesSecurityOption2 `security:"option"`
	Option3 *GetUsersWorkspaceRepositoriesSecurityOption3 `security:"option"`
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
