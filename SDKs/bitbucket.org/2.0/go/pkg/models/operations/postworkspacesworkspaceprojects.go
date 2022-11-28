package operations

import (
	"openapi/pkg/models/shared"
)

type PostWorkspacesWorkspaceProjectsPathParams struct {
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PostWorkspacesWorkspaceProjectsSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PostWorkspacesWorkspaceProjectsRequest struct {
	PathParams PostWorkspacesWorkspaceProjectsPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
	Security   PostWorkspacesWorkspaceProjectsSecurity
}

type PostWorkspacesWorkspaceProjectsResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Error       map[string]interface{}
	Project     map[string]interface{}
}
