package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkspacesWorkspaceMembersMemberPathParams struct {
	Member    string `pathParam:"style=simple,explode=false,name=member"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetWorkspacesWorkspaceMembersMemberSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetWorkspacesWorkspaceMembersMemberRequest struct {
	PathParams GetWorkspacesWorkspaceMembersMemberPathParams
	Security   GetWorkspacesWorkspaceMembersMemberSecurity
}

type GetWorkspacesWorkspaceMembersMemberResponse struct {
	ContentType         string
	StatusCode          int64
	Error               map[string]interface{}
	WorkspaceMembership map[string]interface{}
}
