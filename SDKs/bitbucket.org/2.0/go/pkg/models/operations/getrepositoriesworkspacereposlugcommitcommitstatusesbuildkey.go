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

type GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity struct {
	Option1 *GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurityOption1 `security:"option"`
	Option2 *GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurityOption2 `security:"option"`
	Option3 *GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurityOption3 `security:"option"`
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
