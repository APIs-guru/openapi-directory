package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathPathParams struct {
	IssueID   string `pathParam:"style=simple,explode=false,name=issue_id"`
	Path      string `pathParam:"style=simple,explode=false,name=path"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathSecurity struct {
	Option1 *DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathSecurityOption1 `security:"option"`
	Option2 *DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathSecurityOption2 `security:"option"`
	Option3 *DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathSecurityOption3 `security:"option"`
}

type DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathRequest struct {
	PathParams DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathPathParams
	Security   DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathSecurity
}

type DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
