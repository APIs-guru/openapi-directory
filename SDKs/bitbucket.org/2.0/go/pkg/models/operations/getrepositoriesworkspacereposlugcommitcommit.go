package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugCommitCommitPathParams struct {
	Commit    string `pathParam:"style=simple,explode=false,name=commit"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugCommitCommitSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugCommitCommitRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugCommitCommitPathParams
	Security   GetRepositoriesWorkspaceRepoSlugCommitCommitSecurity
}

type GetRepositoriesWorkspaceRepoSlugCommitCommitResponse struct {
	ContentType string
	StatusCode  int64
	Commit      map[string]interface{}
	Error       map[string]interface{}
}
