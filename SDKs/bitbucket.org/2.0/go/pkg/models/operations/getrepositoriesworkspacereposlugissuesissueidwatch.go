package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchPathParams struct {
	IssueID   string `pathParam:"style=simple,explode=false,name=issue_id"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchPathParams
	Security   GetRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchSecurity
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
