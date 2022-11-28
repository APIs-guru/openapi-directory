package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkspacesWorkspaceMembersPathParams struct {
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetWorkspacesWorkspaceMembersSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetWorkspacesWorkspaceMembersRequest struct {
	PathParams GetWorkspacesWorkspaceMembersPathParams
	Security   GetWorkspacesWorkspaceMembersSecurity
}

type GetWorkspacesWorkspaceMembersResponse struct {
	ContentType                   string
	StatusCode                    int64
	Error                         map[string]interface{}
	PaginatedWorkspaceMemberships *shared.PaginatedWorkspaceMemberships
}
