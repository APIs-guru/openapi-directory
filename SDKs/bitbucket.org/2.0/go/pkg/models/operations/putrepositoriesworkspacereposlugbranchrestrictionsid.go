package operations

import (
	"openapi/pkg/models/shared"
)

type PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIDPathParams struct {
	ID        string `pathParam:"style=simple,explode=false,name=id"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIDSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIDSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIDSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIDSecurity struct {
	Option1 *PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIDSecurityOption1 `security:"option"`
	Option2 *PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIDSecurityOption2 `security:"option"`
	Option3 *PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIDSecurityOption3 `security:"option"`
}

type PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIDRequest struct {
	PathParams PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIDPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
	Security   PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIDSecurity
}

type PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIDResponse struct {
	ContentType       string
	StatusCode        int64
	Branchrestriction map[string]interface{}
	Error             map[string]interface{}
}
