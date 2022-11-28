package operations

import (
	"openapi/pkg/models/shared"
)

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsPathParams struct {
	PullRequestID int64  `pathParam:"style=simple,explode=false,name=pull_request_id"`
	RepoSlug      string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace     string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsRequest struct {
	PathParams PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
	Security   PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsSecurity
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsResponse struct {
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
	Error              map[string]interface{}
	PullrequestComment map[string]interface{}
}
