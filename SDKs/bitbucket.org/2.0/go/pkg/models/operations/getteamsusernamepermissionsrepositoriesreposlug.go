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

type GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
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
