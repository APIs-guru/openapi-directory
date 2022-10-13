package operations

import (
	"openapi/pkg/models/shared"
)

type PostWorkspacesWorkspaceHooksPathParams struct {
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PostWorkspacesWorkspaceHooksSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PostWorkspacesWorkspaceHooksSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type PostWorkspacesWorkspaceHooksSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PostWorkspacesWorkspaceHooksSecurity struct {
	Option1 *PostWorkspacesWorkspaceHooksSecurityOption1 `security:"option"`
	Option2 *PostWorkspacesWorkspaceHooksSecurityOption2 `security:"option"`
	Option3 *PostWorkspacesWorkspaceHooksSecurityOption3 `security:"option"`
}

type PostWorkspacesWorkspaceHooksRequest struct {
	PathParams PostWorkspacesWorkspaceHooksPathParams
	Security   PostWorkspacesWorkspaceHooksSecurity
}

type PostWorkspacesWorkspaceHooksResponse struct {
	ContentType         string
	Headers             map[string][]string
	StatusCode          int64
	Error               map[string]interface{}
	WebhookSubscription map[string]interface{}
}
