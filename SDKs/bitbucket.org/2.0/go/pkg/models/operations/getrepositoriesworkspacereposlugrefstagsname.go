package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugRefsTagsNamePathParams struct {
	Name      string `pathParam:"style=simple,explode=false,name=name"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugRefsTagsNameSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugRefsTagsNameRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugRefsTagsNamePathParams
	Security   GetRepositoriesWorkspaceRepoSlugRefsTagsNameSecurity
}

type GetRepositoriesWorkspaceRepoSlugRefsTagsNameResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
	Tag         map[string]interface{}
}
