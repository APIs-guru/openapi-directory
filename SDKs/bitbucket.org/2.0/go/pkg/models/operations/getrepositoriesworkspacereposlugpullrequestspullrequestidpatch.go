package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPatchPathParams struct {
	PullRequestID int64  `pathParam:"style=simple,explode=false,name=pull_request_id"`
	RepoSlug      string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace     string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPatchSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPatchSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPatchSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPatchSecurity struct {
	Option1 *GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPatchSecurityOption1 `security:"option"`
	Option2 *GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPatchSecurityOption2 `security:"option"`
	Option3 *GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPatchSecurityOption3 `security:"option"`
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPatchRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPatchPathParams
	Security   GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPatchSecurity
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPatchResponse struct {
	ContentType string
	StatusCode  int64
}
