package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathPathParams struct {
	Commit    string `pathParam:"style=simple,explode=false,name=commit"`
	Path      string `pathParam:"style=simple,explode=false,name=path"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryParams struct {
	Q       *string `queryParam:"style=form,explode=true,name=q"`
	Renames *string `queryParam:"style=form,explode=true,name=renames"`
	Sort    *string `queryParam:"style=form,explode=true,name=sort"`
}

type GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathRequest struct {
	PathParams  GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathPathParams
	QueryParams GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryParams
	Security    GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathSecurity
}

type GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathResponse struct {
	ContentType    string
	StatusCode     int64
	Error          map[string]interface{}
	PaginatedFiles *shared.PaginatedFiles
}
