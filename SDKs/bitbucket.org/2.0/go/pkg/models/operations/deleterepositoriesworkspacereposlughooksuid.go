package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRepositoriesWorkspaceRepoSlugHooksUIDPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	UID       string `pathParam:"style=simple,explode=false,name=uid"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type DeleteRepositoriesWorkspaceRepoSlugHooksUIDSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
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
