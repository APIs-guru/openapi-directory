package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDPathParams struct {
	IssueID   string `pathParam:"style=simple,explode=false,name=issue_id"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDRequest struct {
	PathParams DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDPathParams
	Security   DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDSecurity
}

type DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
	Issue       map[string]interface{}
}
