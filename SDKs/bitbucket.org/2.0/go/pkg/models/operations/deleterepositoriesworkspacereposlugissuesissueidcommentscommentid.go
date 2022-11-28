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

type DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
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
