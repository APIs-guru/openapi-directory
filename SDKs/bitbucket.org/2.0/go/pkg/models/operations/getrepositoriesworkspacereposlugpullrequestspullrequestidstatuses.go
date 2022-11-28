package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesPathParams struct {
	PullRequestID int64  `pathParam:"style=simple,explode=false,name=pull_request_id"`
	RepoSlug      string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace     string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesQueryParams struct {
	Q    *string `queryParam:"style=form,explode=true,name=q"`
	Sort *string `queryParam:"style=form,explode=true,name=sort"`
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesRequest struct {
	PathParams  GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesPathParams
	QueryParams GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesQueryParams
	Security    GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesSecurity
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesResponse struct {
	ContentType             string
	StatusCode              int64
	Error                   map[string]interface{}
	PaginatedCommitstatuses *shared.PaginatedCommitstatuses
}
