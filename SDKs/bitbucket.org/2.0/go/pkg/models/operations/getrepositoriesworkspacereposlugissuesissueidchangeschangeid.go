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

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeIDSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeIDSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeIDSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeIDSecurity struct {
	Option1 *GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeIDSecurityOption1 `security:"option"`
	Option2 *GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeIDSecurityOption2 `security:"option"`
	Option3 *GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeIDSecurityOption3 `security:"option"`
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
