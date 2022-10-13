package operations

import (
	"openapi/pkg/models/shared"
)

type PostRepositoriesWorkspaceRepoSlugIssuesImportPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PostRepositoriesWorkspaceRepoSlugIssuesImportSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PostRepositoriesWorkspaceRepoSlugIssuesImportSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type PostRepositoriesWorkspaceRepoSlugIssuesImportSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PostRepositoriesWorkspaceRepoSlugIssuesImportSecurity struct {
	Option1 *PostRepositoriesWorkspaceRepoSlugIssuesImportSecurityOption1 `security:"option"`
	Option2 *PostRepositoriesWorkspaceRepoSlugIssuesImportSecurityOption2 `security:"option"`
	Option3 *PostRepositoriesWorkspaceRepoSlugIssuesImportSecurityOption3 `security:"option"`
}

type PostRepositoriesWorkspaceRepoSlugIssuesImportRequest struct {
	PathParams PostRepositoriesWorkspaceRepoSlugIssuesImportPathParams
	Security   PostRepositoriesWorkspaceRepoSlugIssuesImportSecurity
}

type PostRepositoriesWorkspaceRepoSlugIssuesImportResponse struct {
	ContentType    string
	StatusCode     int64
	Error          map[string]interface{}
	IssueJobStatus *shared.IssueJobStatus
}
