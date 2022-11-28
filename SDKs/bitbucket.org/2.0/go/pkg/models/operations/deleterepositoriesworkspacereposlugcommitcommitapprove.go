package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRepositoriesWorkspaceRepoSlugCommitCommitApprovePathParams struct {
	Commit    string `pathParam:"style=simple,explode=false,name=commit"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest struct {
	PathParams DeleteRepositoriesWorkspaceRepoSlugCommitCommitApprovePathParams
	Security   DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurity
}

type DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
