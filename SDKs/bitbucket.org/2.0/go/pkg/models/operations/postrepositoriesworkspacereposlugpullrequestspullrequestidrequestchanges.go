package operations

import (
	"openapi/pkg/models/shared"
)

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesPathParams struct {
	PullRequestID int64  `pathParam:"style=simple,explode=false,name=pull_request_id"`
	RepoSlug      string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace     string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesSecurity struct {
	Option1 *PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesSecurityOption1 `security:"option"`
	Option2 *PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesSecurityOption2 `security:"option"`
	Option3 *PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesSecurityOption3 `security:"option"`
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
