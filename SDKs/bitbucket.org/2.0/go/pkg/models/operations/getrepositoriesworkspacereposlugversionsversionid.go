package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugVersionsVersionIDPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	VersionID int64  `pathParam:"style=simple,explode=false,name=version_id"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugVersionsVersionIDSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugVersionsVersionIDRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugVersionsVersionIDPathParams
	Security   GetRepositoriesWorkspaceRepoSlugVersionsVersionIDSecurity
}

type GetRepositoriesWorkspaceRepoSlugVersionsVersionIDResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
	Version     map[string]interface{}
}
