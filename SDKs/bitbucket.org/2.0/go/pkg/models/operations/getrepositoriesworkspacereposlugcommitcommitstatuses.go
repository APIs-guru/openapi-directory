package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesPathParams struct {
	Commit    string `pathParam:"style=simple,explode=false,name=commit"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesQueryParams struct {
	Q    *string `queryParam:"style=form,explode=true,name=q"`
	Sort *string `queryParam:"style=form,explode=true,name=sort"`
}

type GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesRequest struct {
	PathParams  GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesPathParams
	QueryParams GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesQueryParams
	Security    GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesSecurity
}

type GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesResponse struct {
	ContentType             string
	StatusCode              int64
	Error                   map[string]interface{}
	PaginatedCommitstatuses *shared.PaginatedCommitstatuses
}
