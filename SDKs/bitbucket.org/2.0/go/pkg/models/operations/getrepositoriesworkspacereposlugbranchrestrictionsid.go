package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIDPathParams struct {
	ID        string `pathParam:"style=simple,explode=false,name=id"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIDSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIDRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIDPathParams
	Security   GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIDSecurity
}

type GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIDResponse struct {
	ContentType       string
	StatusCode        int64
	Branchrestriction map[string]interface{}
	Error             map[string]interface{}
}
