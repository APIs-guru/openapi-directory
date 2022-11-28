package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugRefsBranchesNamePathParams struct {
	Name      string `pathParam:"style=simple,explode=false,name=name"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
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
