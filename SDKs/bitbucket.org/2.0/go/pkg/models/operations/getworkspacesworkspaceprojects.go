package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkspacesWorkspaceProjectsPathParams struct {
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetWorkspacesWorkspaceProjectsSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
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
