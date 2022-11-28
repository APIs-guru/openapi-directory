package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDPathParams struct {
	CommentID     int64  `pathParam:"style=simple,explode=false,name=comment_id"`
	PullRequestID int64  `pathParam:"style=simple,explode=false,name=pull_request_id"`
	RepoSlug      string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace     string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDPathParams
	Security   GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDSecurity
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDResponse struct {
	ContentType        string
	StatusCode         int64
	Error              map[string]interface{}
	PullrequestComment map[string]interface{}
}
