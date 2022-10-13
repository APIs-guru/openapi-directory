package operations

import (
	"openapi/pkg/models/shared"
)

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchPathParams struct {
	IssueID   string `pathParam:"style=simple,explode=false,name=issue_id"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchSecurity struct {
	Option1 *PutRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchSecurityOption1 `security:"option"`
	Option2 *PutRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchSecurityOption2 `security:"option"`
	Option3 *PutRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchSecurityOption3 `security:"option"`
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
