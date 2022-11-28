package operations

import (
	"openapi/pkg/models/shared"
)

type PostWorkspacesWorkspaceHooksPathParams struct {
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PostWorkspacesWorkspaceHooksSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
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
