package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkspacesWorkspaceHooksPathParams struct {
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetWorkspacesWorkspaceHooksSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
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
