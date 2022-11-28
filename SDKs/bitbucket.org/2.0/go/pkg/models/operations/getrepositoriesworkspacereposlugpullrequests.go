package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugPullrequestsPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnum string

const (
	GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnumMerged     GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnum = "MERGED"
	GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnumSuperseded GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnum = "SUPERSEDED"
	GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnumOpen       GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnum = "OPEN"
	GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnumDeclined   GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnum = "DECLINED"
)

type GetRepositoriesWorkspaceRepoSlugPullrequestsQueryParams struct {
	State *GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnum `queryParam:"style=form,explode=true,name=state"`
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsRequest struct {
	PathParams  GetRepositoriesWorkspaceRepoSlugPullrequestsPathParams
	QueryParams GetRepositoriesWorkspaceRepoSlugPullrequestsQueryParams
	Security    GetRepositoriesWorkspaceRepoSlugPullrequestsSecurity
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsResponse struct {
	ContentType           string
	StatusCode            int64
	Error                 map[string]interface{}
	PaginatedPullrequests *shared.PaginatedPullrequests
}
