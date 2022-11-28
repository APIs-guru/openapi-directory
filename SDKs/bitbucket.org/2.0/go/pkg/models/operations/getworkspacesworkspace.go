package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkspacesWorkspacePathParams struct {
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetWorkspacesWorkspaceSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetWorkspacesWorkspaceRequest struct {
	PathParams GetWorkspacesWorkspacePathParams
	Security   GetWorkspacesWorkspaceSecurity
}

type GetWorkspacesWorkspaceResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
	Workspace   map[string]interface{}
}
