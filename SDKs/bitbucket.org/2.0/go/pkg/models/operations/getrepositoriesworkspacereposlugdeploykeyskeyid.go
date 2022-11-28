package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDPathParams struct {
	KeyID     string `pathParam:"style=simple,explode=false,name=key_id"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDPathParams
	Security   GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurity
}

type GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDResponse struct {
	ContentType string
	StatusCode  int64
	DeployKey   map[string]interface{}
	Error       map[string]interface{}
}
