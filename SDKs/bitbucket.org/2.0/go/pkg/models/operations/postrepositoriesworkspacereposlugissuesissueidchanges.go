package operations

import (
	"openapi/pkg/models/shared"
)

type PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesPathParams struct {
	IssueID   string `pathParam:"style=simple,explode=false,name=issue_id"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesSecurity struct {
	Option1 *PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesSecurityOption1 `security:"option"`
	Option2 *PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesSecurityOption2 `security:"option"`
	Option3 *PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesSecurityOption3 `security:"option"`
}

type PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesRequest struct {
	PathParams PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
	Security   PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesSecurity
}

type PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Error       map[string]interface{}
	IssueChange map[string]interface{}
}
