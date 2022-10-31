package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchPathParams struct {
	IssueID   string `pathParam:"style=simple,explode=false,name=issue_id"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchSecurity struct {
	Option1 *DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchSecurityOption1 `security:"option"`
	Option2 *DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchSecurityOption2 `security:"option"`
	Option3 *DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchSecurityOption3 `security:"option"`
}

type DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchRequest struct {
	PathParams DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchPathParams
	Security   DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchSecurity
}

type DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
