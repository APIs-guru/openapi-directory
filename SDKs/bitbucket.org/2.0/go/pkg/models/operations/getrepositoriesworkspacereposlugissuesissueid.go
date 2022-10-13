package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDPathParams struct {
	IssueID   string `pathParam:"style=simple,explode=false,name=issue_id"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDSecurity struct {
	Option1 *GetRepositoriesWorkspaceRepoSlugIssuesIssueIDSecurityOption1 `security:"option"`
	Option2 *GetRepositoriesWorkspaceRepoSlugIssuesIssueIDSecurityOption2 `security:"option"`
	Option3 *GetRepositoriesWorkspaceRepoSlugIssuesIssueIDSecurityOption3 `security:"option"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugIssuesIssueIDPathParams
	Security   GetRepositoriesWorkspaceRepoSlugIssuesIssueIDSecurity
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
	Issue       map[string]interface{}
}
