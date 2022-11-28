package operations

import (
	"openapi/pkg/models/shared"
)

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesPathParams struct {
	PullRequestID int64  `pathParam:"style=simple,explode=false,name=pull_request_id"`
	RepoSlug      string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace     string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesRequest struct {
	PathParams PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesPathParams
	Security   PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesSecurity
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
	Participant map[string]interface{}
}
