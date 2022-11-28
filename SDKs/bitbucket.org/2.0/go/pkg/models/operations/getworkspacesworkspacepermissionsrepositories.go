package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkspacesWorkspacePermissionsRepositoriesPathParams struct {
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetWorkspacesWorkspacePermissionsRepositoriesQueryParams struct {
	Q    *string `queryParam:"style=form,explode=true,name=q"`
	Sort *string `queryParam:"style=form,explode=true,name=sort"`
}

type GetWorkspacesWorkspacePermissionsRepositoriesSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetWorkspacesWorkspacePermissionsRepositoriesRequest struct {
	PathParams  GetWorkspacesWorkspacePermissionsRepositoriesPathParams
	QueryParams GetWorkspacesWorkspacePermissionsRepositoriesQueryParams
	Security    GetWorkspacesWorkspacePermissionsRepositoriesSecurity
}

type GetWorkspacesWorkspacePermissionsRepositoriesResponse struct {
	ContentType                    string
	StatusCode                     int64
	Error                          map[string]interface{}
	PaginatedRepositoryPermissions *shared.PaginatedRepositoryPermissions
}
