package operations

import (
	"openapi/pkg/models/shared"
)

type PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDPathParams struct {
	CommentID     int64  `pathParam:"style=simple,explode=false,name=comment_id"`
	PullRequestID int64  `pathParam:"style=simple,explode=false,name=pull_request_id"`
	RepoSlug      string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace     string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDSecurity struct {
	Option1 *PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDSecurityOption1 `security:"option"`
	Option2 *PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDSecurityOption2 `security:"option"`
	Option3 *PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDSecurityOption3 `security:"option"`
}

type PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDRequest struct {
	PathParams PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
	Security   PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDSecurity
}

type PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDResponse struct {
	ContentType        string
	StatusCode         int64
	Error              map[string]interface{}
	PullrequestComment map[string]interface{}
}
