package operations

import (
	"openapi/pkg/models/shared"
)

type PostWorkspacesWorkspaceProjectsPathParams struct {
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PostWorkspacesWorkspaceProjectsSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PostWorkspacesWorkspaceProjectsSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type PostWorkspacesWorkspaceProjectsSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PostWorkspacesWorkspaceProjectsSecurity struct {
	Option1 *PostWorkspacesWorkspaceProjectsSecurityOption1 `security:"option"`
	Option2 *PostWorkspacesWorkspaceProjectsSecurityOption2 `security:"option"`
	Option3 *PostWorkspacesWorkspaceProjectsSecurityOption3 `security:"option"`
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
