package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugDiffstatSpecPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Spec      string `pathParam:"style=simple,explode=false,name=spec"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugDiffstatSpecQueryParams struct {
	IgnoreWhitespace *bool   `queryParam:"style=form,explode=true,name=ignore_whitespace"`
	Merge            *bool   `queryParam:"style=form,explode=true,name=merge"`
	Path             *string `queryParam:"style=form,explode=true,name=path"`
	Renames          *bool   `queryParam:"style=form,explode=true,name=renames"`
}

type GetRepositoriesWorkspaceRepoSlugDiffstatSpecSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugDiffstatSpecRequest struct {
	PathParams  GetRepositoriesWorkspaceRepoSlugDiffstatSpecPathParams
	QueryParams GetRepositoriesWorkspaceRepoSlugDiffstatSpecQueryParams
	Security    GetRepositoriesWorkspaceRepoSlugDiffstatSpecSecurity
}

type GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse struct {
	ContentType        string
	StatusCode         int64
	Error              map[string]interface{}
	PaginatedDiffstats *shared.PaginatedDiffstats
}
