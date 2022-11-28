package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkspacesWorkspaceProjectsProjectKeyPathParams struct {
	ProjectKey string `pathParam:"style=simple,explode=false,name=project_key"`
	Workspace  string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetWorkspacesWorkspaceProjectsProjectKeySecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetWorkspacesWorkspaceProjectsProjectKeyRequest struct {
	PathParams GetWorkspacesWorkspaceProjectsProjectKeyPathParams
	Security   GetWorkspacesWorkspaceProjectsProjectKeySecurity
}

type GetWorkspacesWorkspaceProjectsProjectKeyResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
	Project     map[string]interface{}
}
