package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugQueryParams struct {
	Q    *string `queryParam:"style=form,explode=true,name=q"`
	Sort *string `queryParam:"style=form,explode=true,name=sort"`
}

type GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurity struct {
	Option1 *GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurityOption1 `security:"option"`
	Option2 *GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurityOption2 `security:"option"`
	Option3 *GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurityOption3 `security:"option"`
}

type GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugRequest struct {
	PathParams  GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugPathParams
	QueryParams GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugQueryParams
	Security    GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurity
}

type GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugResponse struct {
	ContentType                    string
	StatusCode                     int64
	Error                          map[string]interface{}
	PaginatedRepositoryPermissions *shared.PaginatedRepositoryPermissions
}
