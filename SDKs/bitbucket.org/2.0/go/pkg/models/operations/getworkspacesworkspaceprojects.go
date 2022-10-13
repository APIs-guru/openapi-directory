package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkspacesWorkspaceProjectsPathParams struct {
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetWorkspacesWorkspaceProjectsSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetWorkspacesWorkspaceProjectsSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetWorkspacesWorkspaceProjectsSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetWorkspacesWorkspaceProjectsSecurity struct {
	Option1 *GetWorkspacesWorkspaceProjectsSecurityOption1 `security:"option"`
	Option2 *GetWorkspacesWorkspaceProjectsSecurityOption2 `security:"option"`
	Option3 *GetWorkspacesWorkspaceProjectsSecurityOption3 `security:"option"`
}

type GetWorkspacesWorkspaceProjectsRequest struct {
	PathParams GetWorkspacesWorkspaceProjectsPathParams
	Security   GetWorkspacesWorkspaceProjectsSecurity
}

type GetWorkspacesWorkspaceProjectsResponse struct {
	ContentType       string
	StatusCode        int64
	Error             map[string]interface{}
	PaginatedProjects *shared.PaginatedProjects
}
