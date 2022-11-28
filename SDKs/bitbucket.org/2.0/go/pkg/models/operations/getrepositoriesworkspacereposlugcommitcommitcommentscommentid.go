package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDPathParams struct {
	CommentID int64  `pathParam:"style=simple,explode=false,name=comment_id"`
	Commit    string `pathParam:"style=simple,explode=false,name=commit"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDPathParams
	Security   GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDSecurity
}

type GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDResponse struct {
	ContentType   string
	StatusCode    int64
	CommitComment map[string]interface{}
}
