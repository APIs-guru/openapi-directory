package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugDeployKeysPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugDeployKeysSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetRepositoriesWorkspaceRepoSlugDeployKeysSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetRepositoriesWorkspaceRepoSlugDeployKeysSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugDeployKeysSecurity struct {
	Option1 *GetRepositoriesWorkspaceRepoSlugDeployKeysSecurityOption1 `security:"option"`
	Option2 *GetRepositoriesWorkspaceRepoSlugDeployKeysSecurityOption2 `security:"option"`
	Option3 *GetRepositoriesWorkspaceRepoSlugDeployKeysSecurityOption3 `security:"option"`
}

type GetRepositoriesWorkspaceRepoSlugDeployKeysRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugDeployKeysPathParams
	Security   GetRepositoriesWorkspaceRepoSlugDeployKeysSecurity
}

type GetRepositoriesWorkspaceRepoSlugDeployKeysResponse struct {
	ContentType         string
	StatusCode          int64
	Error               map[string]interface{}
	PaginatedDeployKeys *shared.PaginatedDeployKeys
}
