package operations

import (
	"openapi/pkg/models/shared"
)

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApprovePathParams struct {
	PullRequestID int64  `pathParam:"style=simple,explode=false,name=pull_request_id"`
	RepoSlug      string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace     string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveRequest struct {
	PathParams PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApprovePathParams
	Security   PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveSecurity
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
	Participant map[string]interface{}
}
