package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugRefsBranchesNamePathParams struct {
	Name      string `pathParam:"style=simple,explode=false,name=name"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurity struct {
	Option1 *GetRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurityOption1 `security:"option"`
	Option2 *GetRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurityOption2 `security:"option"`
	Option3 *GetRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurityOption3 `security:"option"`
}

type GetRepositoriesWorkspaceRepoSlugRefsBranchesNameRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugRefsBranchesNamePathParams
	Security   GetRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurity
}

type GetRepositoriesWorkspaceRepoSlugRefsBranchesNameResponse struct {
	ContentType string
	StatusCode  int64
	Branch      map[string]interface{}
	Error       map[string]interface{}
}
