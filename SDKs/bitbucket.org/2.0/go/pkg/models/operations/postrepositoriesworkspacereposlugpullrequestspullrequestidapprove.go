package operations

import (
	"openapi/pkg/models/shared"
)

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApprovePathParams struct {
	PullRequestID int64  `pathParam:"style=simple,explode=false,name=pull_request_id"`
	RepoSlug      string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace     string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveSecurity struct {
	Option1 *PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveSecurityOption1 `security:"option"`
	Option2 *PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveSecurityOption2 `security:"option"`
	Option3 *PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveSecurityOption3 `security:"option"`
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
