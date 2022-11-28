package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugHooksUIDPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	UID       string `pathParam:"style=simple,explode=false,name=uid"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugHooksUIDSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
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
