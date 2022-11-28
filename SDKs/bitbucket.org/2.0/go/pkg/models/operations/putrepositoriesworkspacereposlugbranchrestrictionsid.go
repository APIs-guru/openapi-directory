package operations

import (
	"openapi/pkg/models/shared"
)

type PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIDPathParams struct {
	ID        string `pathParam:"style=simple,explode=false,name=id"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIDSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
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
