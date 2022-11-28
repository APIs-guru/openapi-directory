package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeTaskStatusTaskIDPathParams struct {
	PullRequestID int64  `pathParam:"style=simple,explode=false,name=pull_request_id"`
	RepoSlug      string `pathParam:"style=simple,explode=false,name=repo_slug"`
	TaskID        string `pathParam:"style=simple,explode=false,name=task_id"`
	Workspace     string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeTaskStatusTaskIDSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeTaskStatusTaskIDRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeTaskStatusTaskIDPathParams
	Security   GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeTaskStatusTaskIDSecurity
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeTaskStatusTaskIDResponse struct {
	ContentType string
	StatusCode  int64
}
