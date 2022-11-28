package operations

import (
	"openapi/pkg/models/shared"
)

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDPathParams struct {
	CommentID int64  `pathParam:"style=simple,explode=false,name=comment_id"`
	IssueID   string `pathParam:"style=simple,explode=false,name=issue_id"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDRequest struct {
	PathParams PutRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
	Security   PutRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurity
}

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDResponse struct {
	ContentType  string
	StatusCode   int64
	Error        map[string]interface{}
	IssueComment map[string]interface{}
}
