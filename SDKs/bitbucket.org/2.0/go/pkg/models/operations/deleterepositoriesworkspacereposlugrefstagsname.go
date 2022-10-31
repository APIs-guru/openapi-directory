package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRepositoriesWorkspaceRepoSlugRefsTagsNamePathParams struct {
	Name      string `pathParam:"style=simple,explode=false,name=name"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type DeleteRepositoriesWorkspaceRepoSlugRefsTagsNameSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteRepositoriesWorkspaceRepoSlugRefsTagsNameSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type DeleteRepositoriesWorkspaceRepoSlugRefsTagsNameSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteRepositoriesWorkspaceRepoSlugRefsTagsNameSecurity struct {
	Option1 *DeleteRepositoriesWorkspaceRepoSlugRefsTagsNameSecurityOption1 `security:"option"`
	Option2 *DeleteRepositoriesWorkspaceRepoSlugRefsTagsNameSecurityOption2 `security:"option"`
	Option3 *DeleteRepositoriesWorkspaceRepoSlugRefsTagsNameSecurityOption3 `security:"option"`
}

type DeleteRepositoriesWorkspaceRepoSlugRefsTagsNameRequest struct {
	PathParams DeleteRepositoriesWorkspaceRepoSlugRefsTagsNamePathParams
	Security   DeleteRepositoriesWorkspaceRepoSlugRefsTagsNameSecurity
}

type DeleteRepositoriesWorkspaceRepoSlugRefsTagsNameResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
