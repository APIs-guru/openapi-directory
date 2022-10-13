package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteWorkspacesWorkspaceProjectsProjectKeyPathParams struct {
	ProjectKey string `pathParam:"style=simple,explode=false,name=project_key"`
	Workspace  string `pathParam:"style=simple,explode=false,name=workspace"`
}

type DeleteWorkspacesWorkspaceProjectsProjectKeySecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteWorkspacesWorkspaceProjectsProjectKeySecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type DeleteWorkspacesWorkspaceProjectsProjectKeySecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteWorkspacesWorkspaceProjectsProjectKeySecurity struct {
	Option1 *DeleteWorkspacesWorkspaceProjectsProjectKeySecurityOption1 `security:"option"`
	Option2 *DeleteWorkspacesWorkspaceProjectsProjectKeySecurityOption2 `security:"option"`
	Option3 *DeleteWorkspacesWorkspaceProjectsProjectKeySecurityOption3 `security:"option"`
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
