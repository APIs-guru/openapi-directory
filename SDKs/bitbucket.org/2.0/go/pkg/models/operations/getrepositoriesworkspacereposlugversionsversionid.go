package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugVersionsVersionIDPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	VersionID int64  `pathParam:"style=simple,explode=false,name=version_id"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugVersionsVersionIDSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetRepositoriesWorkspaceRepoSlugVersionsVersionIDSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetRepositoriesWorkspaceRepoSlugVersionsVersionIDSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugVersionsVersionIDSecurity struct {
	Option1 *GetRepositoriesWorkspaceRepoSlugVersionsVersionIDSecurityOption1 `security:"option"`
	Option2 *GetRepositoriesWorkspaceRepoSlugVersionsVersionIDSecurityOption2 `security:"option"`
	Option3 *GetRepositoriesWorkspaceRepoSlugVersionsVersionIDSecurityOption3 `security:"option"`
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
