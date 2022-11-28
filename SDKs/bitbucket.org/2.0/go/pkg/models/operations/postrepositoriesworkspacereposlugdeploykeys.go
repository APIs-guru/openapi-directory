package operations

import (
	"openapi/pkg/models/shared"
)

type PostRepositoriesWorkspaceRepoSlugDeployKeysPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PostRepositoriesWorkspaceRepoSlugDeployKeysSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PostRepositoriesWorkspaceRepoSlugDeployKeysRequest struct {
	PathParams PostRepositoriesWorkspaceRepoSlugDeployKeysPathParams
	Security   PostRepositoriesWorkspaceRepoSlugDeployKeysSecurity
}

type PostRepositoriesWorkspaceRepoSlugDeployKeysResponse struct {
	ContentType string
	StatusCode  int64
	DeployKey   map[string]interface{}
	Error       map[string]interface{}
}
