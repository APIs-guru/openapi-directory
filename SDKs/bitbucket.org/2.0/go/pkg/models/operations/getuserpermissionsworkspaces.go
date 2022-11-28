package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserPermissionsWorkspacesQueryParams struct {
	Q    *string `queryParam:"style=form,explode=true,name=q"`
	Sort *string `queryParam:"style=form,explode=true,name=sort"`
}

type GetUserPermissionsWorkspacesSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetUserPermissionsWorkspacesRequest struct {
	QueryParams GetUserPermissionsWorkspacesQueryParams
	Security    GetUserPermissionsWorkspacesSecurity
}

type GetUserPermissionsWorkspacesResponse struct {
	ContentType                   string
	StatusCode                    int64
	Error                         map[string]interface{}
	PaginatedWorkspaceMemberships *shared.PaginatedWorkspaceMemberships
}
