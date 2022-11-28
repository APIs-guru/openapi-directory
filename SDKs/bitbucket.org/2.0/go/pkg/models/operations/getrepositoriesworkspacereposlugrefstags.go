package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugRefsTagsPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugRefsTagsQueryParams struct {
	Q    *string `queryParam:"style=form,explode=true,name=q"`
	Sort *string `queryParam:"style=form,explode=true,name=sort"`
}

type GetRepositoriesWorkspaceRepoSlugRefsTagsSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugRefsTagsRequest struct {
	PathParams  GetRepositoriesWorkspaceRepoSlugRefsTagsPathParams
	QueryParams GetRepositoriesWorkspaceRepoSlugRefsTagsQueryParams
	Security    GetRepositoriesWorkspaceRepoSlugRefsTagsSecurity
}

type GetRepositoriesWorkspaceRepoSlugRefsTagsResponse struct {
	ContentType   string
	StatusCode    int64
	Error         map[string]interface{}
	PaginatedTags *shared.PaginatedTags
}
