package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams struct {
	Commit    string `pathParam:"style=simple,explode=false,name=commit"`
	Key       string `pathParam:"style=simple,explode=false,name=key"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams
	Security   GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity
}

type GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse struct {
	ContentType  string
	StatusCode   int64
	Commitstatus map[string]interface{}
	Error        map[string]interface{}
}
