package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugIssuesPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugIssuesPathParams
	Security   GetRepositoriesWorkspaceRepoSlugIssuesSecurity
}

type GetRepositoriesWorkspaceRepoSlugIssuesResponse struct {
	ContentType     string
	StatusCode      int64
	Error           map[string]interface{}
	PaginatedIssues *shared.PaginatedIssues
}
