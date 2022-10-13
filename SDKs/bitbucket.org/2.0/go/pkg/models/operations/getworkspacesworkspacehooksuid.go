package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkspacesWorkspaceHooksUIDPathParams struct {
	UID       string `pathParam:"style=simple,explode=false,name=uid"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetWorkspacesWorkspaceHooksUIDSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetWorkspacesWorkspaceHooksUIDSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetWorkspacesWorkspaceHooksUIDSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetWorkspacesWorkspaceHooksUIDSecurity struct {
	Option1 *GetWorkspacesWorkspaceHooksUIDSecurityOption1 `security:"option"`
	Option2 *GetWorkspacesWorkspaceHooksUIDSecurityOption2 `security:"option"`
	Option3 *GetWorkspacesWorkspaceHooksUIDSecurityOption3 `security:"option"`
}

type GetWorkspacesWorkspaceHooksUIDRequest struct {
	PathParams GetWorkspacesWorkspaceHooksUIDPathParams
	Security   GetWorkspacesWorkspaceHooksUIDSecurity
}

type GetWorkspacesWorkspaceHooksUIDResponse struct {
	ContentType         string
	StatusCode          int64
	Error               map[string]interface{}
	WebhookSubscription map[string]interface{}
}
