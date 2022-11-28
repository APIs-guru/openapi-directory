package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteWorkspacesWorkspaceProjectsProjectKeyPathParams struct {
	ProjectKey string `pathParam:"style=simple,explode=false,name=project_key"`
	Workspace  string `pathParam:"style=simple,explode=false,name=workspace"`
}

type DeleteWorkspacesWorkspaceProjectsProjectKeySecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteWorkspacesWorkspaceProjectsProjectKeyRequest struct {
	PathParams DeleteWorkspacesWorkspaceProjectsProjectKeyPathParams
	Security   DeleteWorkspacesWorkspaceProjectsProjectKeySecurity
}

type DeleteWorkspacesWorkspaceProjectsProjectKeyResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
