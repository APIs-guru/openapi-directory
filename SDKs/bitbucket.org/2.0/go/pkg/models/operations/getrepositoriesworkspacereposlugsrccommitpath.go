package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugSrcCommitPathPathParams struct {
	Commit    string `pathParam:"style=simple,explode=false,name=commit"`
	Path      string `pathParam:"style=simple,explode=false,name=path"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugSrcCommitPathFormatEnum string

const (
	GetRepositoriesWorkspaceRepoSlugSrcCommitPathFormatEnumMeta     GetRepositoriesWorkspaceRepoSlugSrcCommitPathFormatEnum = "meta"
	GetRepositoriesWorkspaceRepoSlugSrcCommitPathFormatEnumRendered GetRepositoriesWorkspaceRepoSlugSrcCommitPathFormatEnum = "rendered"
)

type GetRepositoriesWorkspaceRepoSlugSrcCommitPathQueryParams struct {
	Format   *GetRepositoriesWorkspaceRepoSlugSrcCommitPathFormatEnum `queryParam:"style=form,explode=true,name=format"`
	MaxDepth *int64                                                   `queryParam:"style=form,explode=true,name=max_depth"`
	Q        *string                                                  `queryParam:"style=form,explode=true,name=q"`
	Sort     *string                                                  `queryParam:"style=form,explode=true,name=sort"`
}

type GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurity struct {
	Option1 *GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurityOption1 `security:"option"`
	Option2 *GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurityOption2 `security:"option"`
	Option3 *GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurityOption3 `security:"option"`
}

type GetRepositoriesWorkspaceRepoSlugSrcCommitPathRequest struct {
	PathParams  GetRepositoriesWorkspaceRepoSlugSrcCommitPathPathParams
	QueryParams GetRepositoriesWorkspaceRepoSlugSrcCommitPathQueryParams
	Security    GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurity
}

type GetRepositoriesWorkspaceRepoSlugSrcCommitPathResponse struct {
	ContentType          string
	StatusCode           int64
	Error                map[string]interface{}
	PaginatedTreeentries *shared.PaginatedTreeentries
}
