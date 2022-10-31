package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugRefsTagsNamePathParams struct {
	Name      string `pathParam:"style=simple,explode=false,name=name"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugRefsTagsNameSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetRepositoriesWorkspaceRepoSlugRefsTagsNameSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetRepositoriesWorkspaceRepoSlugRefsTagsNameSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugRefsTagsNameSecurity struct {
	Option1 *GetRepositoriesWorkspaceRepoSlugRefsTagsNameSecurityOption1 `security:"option"`
	Option2 *GetRepositoriesWorkspaceRepoSlugRefsTagsNameSecurityOption2 `security:"option"`
	Option3 *GetRepositoriesWorkspaceRepoSlugRefsTagsNameSecurityOption3 `security:"option"`
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
