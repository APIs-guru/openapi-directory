package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugPatchSpecPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Spec      string `pathParam:"style=simple,explode=false,name=spec"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugPatchSpecSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetRepositoriesWorkspaceRepoSlugPatchSpecSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetRepositoriesWorkspaceRepoSlugPatchSpecSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugPatchSpecSecurity struct {
	Option1 *GetRepositoriesWorkspaceRepoSlugPatchSpecSecurityOption1 `security:"option"`
	Option2 *GetRepositoriesWorkspaceRepoSlugPatchSpecSecurityOption2 `security:"option"`
	Option3 *GetRepositoriesWorkspaceRepoSlugPatchSpecSecurityOption3 `security:"option"`
}

type GetRepositoriesWorkspaceRepoSlugPatchSpecRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugPatchSpecPathParams
	Security   GetRepositoriesWorkspaceRepoSlugPatchSpecSecurity
}

type GetRepositoriesWorkspaceRepoSlugPatchSpecResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
