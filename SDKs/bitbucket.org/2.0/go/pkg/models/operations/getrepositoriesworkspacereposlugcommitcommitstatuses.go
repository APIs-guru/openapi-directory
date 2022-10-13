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

type GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesSecurity struct {
	Option1 *GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesSecurityOption1 `security:"option"`
	Option2 *GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesSecurityOption2 `security:"option"`
	Option3 *GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesSecurityOption3 `security:"option"`
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
