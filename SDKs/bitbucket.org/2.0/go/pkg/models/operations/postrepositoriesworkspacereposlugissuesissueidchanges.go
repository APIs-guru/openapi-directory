package operations

import (
	"openapi/pkg/models/shared"
)

type PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesPathParams struct {
	IssueID   string `pathParam:"style=simple,explode=false,name=issue_id"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
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
