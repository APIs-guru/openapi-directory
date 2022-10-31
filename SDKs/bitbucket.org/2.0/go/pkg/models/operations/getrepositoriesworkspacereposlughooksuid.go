package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugHooksUIDPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	UID       string `pathParam:"style=simple,explode=false,name=uid"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugHooksUIDSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetRepositoriesWorkspaceRepoSlugHooksUIDSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetRepositoriesWorkspaceRepoSlugHooksUIDSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugHooksUIDSecurity struct {
	Option1 *GetRepositoriesWorkspaceRepoSlugHooksUIDSecurityOption1 `security:"option"`
	Option2 *GetRepositoriesWorkspaceRepoSlugHooksUIDSecurityOption2 `security:"option"`
	Option3 *GetRepositoriesWorkspaceRepoSlugHooksUIDSecurityOption3 `security:"option"`
}

type GetRepositoriesWorkspaceRepoSlugHooksUIDRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugHooksUIDPathParams
	Security   GetRepositoriesWorkspaceRepoSlugHooksUIDSecurity
}

type GetRepositoriesWorkspaceRepoSlugHooksUIDResponse struct {
	ContentType         string
	StatusCode          int64
	Error               map[string]interface{}
	WebhookSubscription map[string]interface{}
}
