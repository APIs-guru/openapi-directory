package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRepositoriesWorkspaceRepoSlugPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type DeleteRepositoriesWorkspaceRepoSlugQueryParams struct {
	RedirectTo *string `queryParam:"style=form,explode=true,name=redirect_to"`
}

type DeleteRepositoriesWorkspaceRepoSlugSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteRepositoriesWorkspaceRepoSlugRequest struct {
	PathParams  DeleteRepositoriesWorkspaceRepoSlugPathParams
	QueryParams DeleteRepositoriesWorkspaceRepoSlugQueryParams
	Security    DeleteRepositoriesWorkspaceRepoSlugSecurity
}

type DeleteRepositoriesWorkspaceRepoSlugResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
