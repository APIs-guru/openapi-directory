package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Revspec   string `pathParam:"style=simple,explode=false,name=revspec"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecPathParams
	Security   GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecSecurity
}

type GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecResponse struct {
	ContentType string
	StatusCode  int64
	Commit      map[string]interface{}
	Error       map[string]interface{}
}
