package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathPathParams struct {
	IssueID   string `pathParam:"style=simple,explode=false,name=issue_id"`
	Path      string `pathParam:"style=simple,explode=false,name=path"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathSecurity struct {
	Option1 *GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathSecurityOption1 `security:"option"`
	Option2 *GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathSecurityOption2 `security:"option"`
	Option3 *GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathSecurityOption3 `security:"option"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathPathParams
	Security   GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathSecurity
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Error       map[string]interface{}
}
