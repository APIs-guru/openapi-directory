package operations

import (
	"openapi/pkg/models/shared"
)

type PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildPathParams struct {
	Commit    string `pathParam:"style=simple,explode=false,name=commit"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildRequest struct {
	PathParams PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
	Security   PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildSecurity
}

type PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildResponse struct {
	ContentType  string
	StatusCode   int64
	Commitstatus map[string]interface{}
	Error        map[string]interface{}
}
