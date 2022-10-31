package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugRefsBranchesPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugRefsBranchesQueryParams struct {
	Q    *string `queryParam:"style=form,explode=true,name=q"`
	Sort *string `queryParam:"style=form,explode=true,name=sort"`
}

type GetRepositoriesWorkspaceRepoSlugRefsBranchesSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetRepositoriesWorkspaceRepoSlugRefsBranchesSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetRepositoriesWorkspaceRepoSlugRefsBranchesSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugRefsBranchesSecurity struct {
	Option1 *GetRepositoriesWorkspaceRepoSlugRefsBranchesSecurityOption1 `security:"option"`
	Option2 *GetRepositoriesWorkspaceRepoSlugRefsBranchesSecurityOption2 `security:"option"`
	Option3 *GetRepositoriesWorkspaceRepoSlugRefsBranchesSecurityOption3 `security:"option"`
}

type GetRepositoriesWorkspaceRepoSlugRefsBranchesRequest struct {
	PathParams  GetRepositoriesWorkspaceRepoSlugRefsBranchesPathParams
	QueryParams GetRepositoriesWorkspaceRepoSlugRefsBranchesQueryParams
	Security    GetRepositoriesWorkspaceRepoSlugRefsBranchesSecurity
}

type GetRepositoriesWorkspaceRepoSlugRefsBranchesResponse struct {
	ContentType       string
	StatusCode        int64
	Error             map[string]interface{}
	PaginatedBranches *shared.PaginatedBranches
}
