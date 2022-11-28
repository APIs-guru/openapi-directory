package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkspacesWorkspacePermissionsPathParams struct {
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetWorkspacesWorkspacePermissionsQueryParams struct {
	Q *string `queryParam:"style=form,explode=true,name=q"`
}

type GetWorkspacesWorkspacePermissionsSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetWorkspacesWorkspacePermissionsRequest struct {
	PathParams  GetWorkspacesWorkspacePermissionsPathParams
	QueryParams GetWorkspacesWorkspacePermissionsQueryParams
	Security    GetWorkspacesWorkspacePermissionsSecurity
}

type GetWorkspacesWorkspacePermissionsResponse struct {
	ContentType                   string
	StatusCode                    int64
	Error                         map[string]interface{}
	PaginatedWorkspaceMemberships *shared.PaginatedWorkspaceMemberships
}
