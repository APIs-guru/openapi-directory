package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugSrcPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugSrcFormatEnum string

const (
	GetRepositoriesWorkspaceRepoSlugSrcFormatEnumMeta GetRepositoriesWorkspaceRepoSlugSrcFormatEnum = "meta"
)

type GetRepositoriesWorkspaceRepoSlugSrcQueryParams struct {
	Format *GetRepositoriesWorkspaceRepoSlugSrcFormatEnum `queryParam:"style=form,explode=true,name=format"`
}

type GetRepositoriesWorkspaceRepoSlugSrcSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugSrcRequest struct {
	PathParams  GetRepositoriesWorkspaceRepoSlugSrcPathParams
	QueryParams GetRepositoriesWorkspaceRepoSlugSrcQueryParams
	Security    GetRepositoriesWorkspaceRepoSlugSrcSecurity
}

type GetRepositoriesWorkspaceRepoSlugSrcResponse struct {
	ContentType          string
	StatusCode           int64
	Error                map[string]interface{}
	PaginatedTreeentries *shared.PaginatedTreeentries
}
