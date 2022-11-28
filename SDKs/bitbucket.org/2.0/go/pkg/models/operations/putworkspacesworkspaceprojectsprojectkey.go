package operations

import (
	"openapi/pkg/models/shared"
)

type PutWorkspacesWorkspaceProjectsProjectKeyPathParams struct {
	ProjectKey string `pathParam:"style=simple,explode=false,name=project_key"`
	Workspace  string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PutWorkspacesWorkspaceProjectsProjectKeySecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PutWorkspacesWorkspaceProjectsProjectKeyRequest struct {
	PathParams PutWorkspacesWorkspaceProjectsProjectKeyPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
	Security   PutWorkspacesWorkspaceProjectsProjectKeySecurity
}

type PutWorkspacesWorkspaceProjectsProjectKeyResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Error       map[string]interface{}
	Project     map[string]interface{}
}
