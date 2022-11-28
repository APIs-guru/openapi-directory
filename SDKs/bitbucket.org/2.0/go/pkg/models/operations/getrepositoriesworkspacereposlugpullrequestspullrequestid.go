package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPathParams struct {
	PullRequestID int64  `pathParam:"style=simple,explode=false,name=pull_request_id"`
	RepoSlug      string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace     string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPathParams
	Security   GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDSecurity
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
	Pullrequest map[string]interface{}
}
