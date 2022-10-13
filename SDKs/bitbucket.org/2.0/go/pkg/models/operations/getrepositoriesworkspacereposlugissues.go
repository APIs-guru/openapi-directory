package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugIssuesPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesSecurity struct {
	Option1 *GetRepositoriesWorkspaceRepoSlugIssuesSecurityOption1 `security:"option"`
	Option2 *GetRepositoriesWorkspaceRepoSlugIssuesSecurityOption2 `security:"option"`
	Option3 *GetRepositoriesWorkspaceRepoSlugIssuesSecurityOption3 `security:"option"`
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
