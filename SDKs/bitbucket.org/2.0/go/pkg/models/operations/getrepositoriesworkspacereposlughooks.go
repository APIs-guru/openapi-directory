package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugHooksPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugHooksSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetRepositoriesWorkspaceRepoSlugHooksSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetRepositoriesWorkspaceRepoSlugHooksSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugHooksSecurity struct {
	Option1 *GetRepositoriesWorkspaceRepoSlugHooksSecurityOption1 `security:"option"`
	Option2 *GetRepositoriesWorkspaceRepoSlugHooksSecurityOption2 `security:"option"`
	Option3 *GetRepositoriesWorkspaceRepoSlugHooksSecurityOption3 `security:"option"`
}

type GetRepositoriesWorkspaceRepoSlugHooksRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugHooksPathParams
	Security   GetRepositoriesWorkspaceRepoSlugHooksSecurity
}

type GetRepositoriesWorkspaceRepoSlugHooksResponse struct {
	ContentType                   string
	StatusCode                    int64
	Error                         map[string]interface{}
	PaginatedWebhookSubscriptions *shared.PaginatedWebhookSubscriptions
}
