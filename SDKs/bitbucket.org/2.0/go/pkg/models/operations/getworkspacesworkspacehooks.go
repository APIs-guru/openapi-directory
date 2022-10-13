package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkspacesWorkspaceHooksPathParams struct {
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetWorkspacesWorkspaceHooksSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetWorkspacesWorkspaceHooksSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetWorkspacesWorkspaceHooksSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetWorkspacesWorkspaceHooksSecurity struct {
	Option1 *GetWorkspacesWorkspaceHooksSecurityOption1 `security:"option"`
	Option2 *GetWorkspacesWorkspaceHooksSecurityOption2 `security:"option"`
	Option3 *GetWorkspacesWorkspaceHooksSecurityOption3 `security:"option"`
}

type GetWorkspacesWorkspaceHooksRequest struct {
	PathParams GetWorkspacesWorkspaceHooksPathParams
	Security   GetWorkspacesWorkspaceHooksSecurity
}

type GetWorkspacesWorkspaceHooksResponse struct {
	ContentType                   string
	StatusCode                    int64
	Error                         map[string]interface{}
	PaginatedWebhookSubscriptions *shared.PaginatedWebhookSubscriptions
}
