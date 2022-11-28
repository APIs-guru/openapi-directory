package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugPullrequestsActivityPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsActivitySecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsActivityRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugPullrequestsActivityPathParams
	Security   GetRepositoriesWorkspaceRepoSlugPullrequestsActivitySecurity
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsActivityResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
