package operations

import (
	"openapi/pkg/models/shared"
)

type PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams struct {
	Commit    string `pathParam:"style=simple,explode=false,name=commit"`
	Key       string `pathParam:"style=simple,explode=false,name=key"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity struct {
	Option1 *PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurityOption1 `security:"option"`
	Option2 *PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurityOption2 `security:"option"`
	Option3 *PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurityOption3 `security:"option"`
}

type PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest struct {
	PathParams PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
	Security   PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity
}

type PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse struct {
	ContentType  string
	StatusCode   int64
	Commitstatus map[string]interface{}
	Error        map[string]interface{}
}
