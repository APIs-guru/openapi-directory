package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugRefsPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugRefsQueryParams struct {
	Q    *string `queryParam:"style=form,explode=true,name=q"`
	Sort *string `queryParam:"style=form,explode=true,name=sort"`
}

type GetRepositoriesWorkspaceRepoSlugRefsSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugRefsRequest struct {
	PathParams  GetRepositoriesWorkspaceRepoSlugRefsPathParams
	QueryParams GetRepositoriesWorkspaceRepoSlugRefsQueryParams
	Security    GetRepositoriesWorkspaceRepoSlugRefsSecurity
}

type GetRepositoriesWorkspaceRepoSlugRefsResponse struct {
	ContentType   string
	StatusCode    int64
	Error         map[string]interface{}
	PaginatedRefs *shared.PaginatedRefs
}
