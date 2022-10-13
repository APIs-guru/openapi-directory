package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamsUsernamePermissionsRepositoriesRepoSlugPathParams struct {
	RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type GetTeamsUsernamePermissionsRepositoriesRepoSlugQueryParams struct {
	Q    *string `queryParam:"style=form,explode=true,name=q"`
	Sort *string `queryParam:"style=form,explode=true,name=sort"`
}

type GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurity struct {
	Option1 *GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurityOption1 `security:"option"`
	Option2 *GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurityOption2 `security:"option"`
	Option3 *GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurityOption3 `security:"option"`
}

type GetTeamsUsernamePermissionsRepositoriesRepoSlugRequest struct {
	PathParams  GetTeamsUsernamePermissionsRepositoriesRepoSlugPathParams
	QueryParams GetTeamsUsernamePermissionsRepositoriesRepoSlugQueryParams
	Security    GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurity
}

type GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse struct {
	ContentType                    string
	StatusCode                     int64
	Error                          map[string]interface{}
	PaginatedRepositoryPermissions *shared.PaginatedRepositoryPermissions
}
