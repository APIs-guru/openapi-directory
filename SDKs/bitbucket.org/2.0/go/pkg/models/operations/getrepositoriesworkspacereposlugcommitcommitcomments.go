package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsPathParams struct {
	Commit    string `pathParam:"style=simple,explode=false,name=commit"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsQueryParams struct {
	Q    *string `queryParam:"style=form,explode=true,name=q"`
	Sort *string `queryParam:"style=form,explode=true,name=sort"`
}

type GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurity struct {
	Option1 *GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurityOption1 `security:"option"`
	Option2 *GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurityOption2 `security:"option"`
	Option3 *GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurityOption3 `security:"option"`
}

type GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest struct {
	PathParams  GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsPathParams
	QueryParams GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsQueryParams
	Security    GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurity
}

type GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse struct {
	ContentType             string
	StatusCode              int64
	PaginatedCommitComments *shared.PaginatedCommitComments
}
