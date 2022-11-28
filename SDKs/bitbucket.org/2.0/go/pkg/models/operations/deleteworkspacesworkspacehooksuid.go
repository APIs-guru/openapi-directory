package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteWorkspacesWorkspaceHooksUIDPathParams struct {
	UID       string `pathParam:"style=simple,explode=false,name=uid"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type DeleteWorkspacesWorkspaceHooksUIDSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
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
