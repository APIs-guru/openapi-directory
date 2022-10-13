package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugIssuesImportPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesImportSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesImportSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesImportSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesImportSecurity struct {
	Option1 *GetRepositoriesWorkspaceRepoSlugIssuesImportSecurityOption1 `security:"option"`
	Option2 *GetRepositoriesWorkspaceRepoSlugIssuesImportSecurityOption2 `security:"option"`
	Option3 *GetRepositoriesWorkspaceRepoSlugIssuesImportSecurityOption3 `security:"option"`
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
