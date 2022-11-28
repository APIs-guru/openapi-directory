package operations

import (
	"openapi/pkg/models/shared"
)

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchPathParams struct {
	IssueID   string `pathParam:"style=simple,explode=false,name=issue_id"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchRequest struct {
	PathParams PutRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchPathParams
	Security   PutRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchSecurity
}

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
