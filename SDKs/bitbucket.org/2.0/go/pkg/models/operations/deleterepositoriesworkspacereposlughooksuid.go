package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRepositoriesWorkspaceRepoSlugHooksUIDPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	UID       string `pathParam:"style=simple,explode=false,name=uid"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type DeleteRepositoriesWorkspaceRepoSlugHooksUIDSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteRepositoriesWorkspaceRepoSlugHooksUIDSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type DeleteRepositoriesWorkspaceRepoSlugHooksUIDSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteRepositoriesWorkspaceRepoSlugHooksUIDSecurity struct {
	Option1 *DeleteRepositoriesWorkspaceRepoSlugHooksUIDSecurityOption1 `security:"option"`
	Option2 *DeleteRepositoriesWorkspaceRepoSlugHooksUIDSecurityOption2 `security:"option"`
	Option3 *DeleteRepositoriesWorkspaceRepoSlugHooksUIDSecurityOption3 `security:"option"`
}

type DeleteRepositoriesWorkspaceRepoSlugHooksUIDRequest struct {
	PathParams DeleteRepositoriesWorkspaceRepoSlugHooksUIDPathParams
	Security   DeleteRepositoriesWorkspaceRepoSlugHooksUIDSecurity
}

type DeleteRepositoriesWorkspaceRepoSlugHooksUIDResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
