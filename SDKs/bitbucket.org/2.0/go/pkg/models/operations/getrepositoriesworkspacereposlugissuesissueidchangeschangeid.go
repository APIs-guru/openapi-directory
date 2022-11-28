package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeIDPathParams struct {
	ChangeID  string `pathParam:"style=simple,explode=false,name=change_id"`
	IssueID   string `pathParam:"style=simple,explode=false,name=issue_id"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeIDSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeIDRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeIDPathParams
	Security   GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeIDSecurity
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeIDResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
	IssueChange map[string]interface{}
}
