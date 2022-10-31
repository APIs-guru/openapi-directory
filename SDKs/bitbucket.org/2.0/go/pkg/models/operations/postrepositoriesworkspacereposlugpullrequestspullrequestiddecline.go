package operations

import (
	"openapi/pkg/models/shared"
)

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDeclinePathParams struct {
	PullRequestID int64  `pathParam:"style=simple,explode=false,name=pull_request_id"`
	RepoSlug      string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace     string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDeclineSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDeclineSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDeclineSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDeclineSecurity struct {
	Option1 *PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDeclineSecurityOption1 `security:"option"`
	Option2 *PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDeclineSecurityOption2 `security:"option"`
	Option3 *PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDeclineSecurityOption3 `security:"option"`
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDeclineRequest struct {
	PathParams PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDeclinePathParams
	Security   PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDeclineSecurity
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDeclineResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
	Pullrequest map[string]interface{}
}
