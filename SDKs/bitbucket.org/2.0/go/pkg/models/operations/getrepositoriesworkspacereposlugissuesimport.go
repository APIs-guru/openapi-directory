package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugIssuesImportPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesImportSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesImportRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugIssuesImportPathParams
	Security   GetRepositoriesWorkspaceRepoSlugIssuesImportSecurity
}

type GetRepositoriesWorkspaceRepoSlugIssuesImportResponse struct {
	ContentType    string
	StatusCode     int64
	Error          map[string]interface{}
	IssueJobStatus *shared.IssueJobStatus
}
