package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIDPathParams struct {
	ID        string `pathParam:"style=simple,explode=false,name=id"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIDSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIDSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIDSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIDSecurity struct {
	Option1 *DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIDSecurityOption1 `security:"option"`
	Option2 *DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIDSecurityOption2 `security:"option"`
	Option3 *DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIDSecurityOption3 `security:"option"`
}

type DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIDRequest struct {
	PathParams DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIDPathParams
	Security   DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIDSecurity
}

type DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIDResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
