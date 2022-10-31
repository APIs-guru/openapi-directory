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

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDSecurity struct {
	Option1 *GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDSecurityOption1 `security:"option"`
	Option2 *GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDSecurityOption2 `security:"option"`
	Option3 *GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDSecurityOption3 `security:"option"`
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
