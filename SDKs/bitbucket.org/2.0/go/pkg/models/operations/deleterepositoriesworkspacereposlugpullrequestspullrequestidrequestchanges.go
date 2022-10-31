package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesPathParams struct {
	PullRequestID int64  `pathParam:"style=simple,explode=false,name=pull_request_id"`
	RepoSlug      string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace     string `pathParam:"style=simple,explode=false,name=workspace"`
}

type DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesSecurity struct {
	Option1 *DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesSecurityOption1 `security:"option"`
	Option2 *DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesSecurityOption2 `security:"option"`
	Option3 *DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesSecurityOption3 `security:"option"`
}

type DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesRequest struct {
	PathParams DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesPathParams
	Security   DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesSecurity
}

type DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
