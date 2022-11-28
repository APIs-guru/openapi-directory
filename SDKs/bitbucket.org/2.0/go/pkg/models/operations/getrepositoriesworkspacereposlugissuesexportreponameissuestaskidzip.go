package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZipPathParams struct {
	RepoName  string `pathParam:"style=simple,explode=false,name=repo_name"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	TaskID    string `pathParam:"style=simple,explode=false,name=task_id"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZipSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZipRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZipPathParams
	Security   GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZipSecurity
}

type GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZipResponse struct {
	ContentType    string
	StatusCode     int64
	Error          map[string]interface{}
	IssueJobStatus *shared.IssueJobStatus
}
