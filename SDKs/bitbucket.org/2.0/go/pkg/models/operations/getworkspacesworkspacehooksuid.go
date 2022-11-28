package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkspacesWorkspaceHooksUIDPathParams struct {
	UID       string `pathParam:"style=simple,explode=false,name=uid"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetWorkspacesWorkspaceHooksUIDSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
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
