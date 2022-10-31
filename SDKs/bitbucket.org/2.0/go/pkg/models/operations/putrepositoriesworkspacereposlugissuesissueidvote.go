package operations

import (
	"openapi/pkg/models/shared"
)

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVotePathParams struct {
	IssueID   string `pathParam:"style=simple,explode=false,name=issue_id"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurity struct {
	Option1 *PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurityOption1 `security:"option"`
	Option2 *PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurityOption2 `security:"option"`
	Option3 *PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurityOption3 `security:"option"`
}

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteRequest struct {
	PathParams PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVotePathParams
	Security   PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurity
}

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
