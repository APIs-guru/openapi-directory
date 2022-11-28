package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDPathParams struct {
	KeyID     string `pathParam:"style=simple,explode=false,name=key_id"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDRequest struct {
	PathParams DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDPathParams
	Security   DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurity
}

type DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
