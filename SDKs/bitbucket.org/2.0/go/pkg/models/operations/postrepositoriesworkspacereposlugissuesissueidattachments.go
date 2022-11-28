package operations

import (
	"openapi/pkg/models/shared"
)

type PostRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathParams struct {
	IssueID   string `pathParam:"style=simple,explode=false,name=issue_id"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PostRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PostRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsRequest struct {
	PathParams PostRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathParams
	Security   PostRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsSecurity
}

type PostRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Error       map[string]interface{}
}
