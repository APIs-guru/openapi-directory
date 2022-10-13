package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDPathParams struct {
	CommentID int64  `pathParam:"style=simple,explode=false,name=comment_id"`
	IssueID   string `pathParam:"style=simple,explode=false,name=issue_id"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurity struct {
	Option1 *DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurityOption1 `security:"option"`
	Option2 *DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurityOption2 `security:"option"`
	Option3 *DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurityOption3 `security:"option"`
}

type DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDRequest struct {
	PathParams DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
	Security   DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurity
}

type DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDResponse struct {
	ContentType string
	StatusCode  int64
}
