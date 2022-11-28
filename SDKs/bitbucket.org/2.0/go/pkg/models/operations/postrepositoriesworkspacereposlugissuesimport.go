package operations

import (
	"openapi/pkg/models/shared"
)

type PostRepositoriesWorkspaceRepoSlugIssuesImportPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PostRepositoriesWorkspaceRepoSlugIssuesImportSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
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
