package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteWorkspacesWorkspaceHooksUIDPathParams struct {
	UID       string `pathParam:"style=simple,explode=false,name=uid"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type DeleteWorkspacesWorkspaceHooksUIDSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteWorkspacesWorkspaceHooksUIDSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type DeleteWorkspacesWorkspaceHooksUIDSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteWorkspacesWorkspaceHooksUIDSecurity struct {
	Option1 *DeleteWorkspacesWorkspaceHooksUIDSecurityOption1 `security:"option"`
	Option2 *DeleteWorkspacesWorkspaceHooksUIDSecurityOption2 `security:"option"`
	Option3 *DeleteWorkspacesWorkspaceHooksUIDSecurityOption3 `security:"option"`
}

type DeleteWorkspacesWorkspaceHooksUIDRequest struct {
	PathParams DeleteWorkspacesWorkspaceHooksUIDPathParams
	Security   DeleteWorkspacesWorkspaceHooksUIDSecurity
}

type DeleteWorkspacesWorkspaceHooksUIDResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
