package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugPullrequestsActivityPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsActivitySecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsActivitySecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsActivitySecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsActivitySecurity struct {
	Option1 *GetRepositoriesWorkspaceRepoSlugPullrequestsActivitySecurityOption1 `security:"option"`
	Option2 *GetRepositoriesWorkspaceRepoSlugPullrequestsActivitySecurityOption2 `security:"option"`
	Option3 *GetRepositoriesWorkspaceRepoSlugPullrequestsActivitySecurityOption3 `security:"option"`
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
