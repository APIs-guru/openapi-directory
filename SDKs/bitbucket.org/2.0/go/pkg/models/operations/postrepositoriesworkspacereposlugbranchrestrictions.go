package operations

import (
	"openapi/pkg/models/shared"
)

type PostRepositoriesWorkspaceRepoSlugBranchRestrictionsPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PostRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PostRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest struct {
	PathParams PostRepositoriesWorkspaceRepoSlugBranchRestrictionsPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
	Security   PostRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity
}

type PostRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse struct {
	ContentType       string
	StatusCode        int64
	Branchrestriction map[string]interface{}
	Error             map[string]interface{}
}
