package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNamePathParams struct {
	Name      string `pathParam:"style=simple,explode=false,name=name"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurity struct {
	Option1 *DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurityOption1 `security:"option"`
	Option2 *DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurityOption2 `security:"option"`
	Option3 *DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurityOption3 `security:"option"`
}

type DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameRequest struct {
	PathParams DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNamePathParams
	Security   DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurity
}

type DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
