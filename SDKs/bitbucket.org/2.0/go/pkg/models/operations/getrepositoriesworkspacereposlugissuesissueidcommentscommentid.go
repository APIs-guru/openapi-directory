package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDPathParams struct {
	CommentID int64  `pathParam:"style=simple,explode=false,name=comment_id"`
	IssueID   string `pathParam:"style=simple,explode=false,name=issue_id"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurity struct {
	Option1 *GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurityOption1 `security:"option"`
	Option2 *GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurityOption2 `security:"option"`
	Option3 *GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurityOption3 `security:"option"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDPathParams
	Security   GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurity
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDResponse struct {
	ContentType  string
	StatusCode   int64
	IssueComment map[string]interface{}
}
