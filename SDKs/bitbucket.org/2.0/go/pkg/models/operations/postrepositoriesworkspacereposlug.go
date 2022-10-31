package operations

import (
	"openapi/pkg/models/shared"
)

type PostRepositoriesWorkspaceRepoSlugPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PostRepositoriesWorkspaceRepoSlugSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PostRepositoriesWorkspaceRepoSlugSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type PostRepositoriesWorkspaceRepoSlugSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PostRepositoriesWorkspaceRepoSlugSecurity struct {
	Option1 *PostRepositoriesWorkspaceRepoSlugSecurityOption1 `security:"option"`
	Option2 *PostRepositoriesWorkspaceRepoSlugSecurityOption2 `security:"option"`
	Option3 *PostRepositoriesWorkspaceRepoSlugSecurityOption3 `security:"option"`
}

type PostRepositoriesWorkspaceRepoSlugRequest struct {
	PathParams PostRepositoriesWorkspaceRepoSlugPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
	Security   PostRepositoriesWorkspaceRepoSlugSecurity
}

type PostRepositoriesWorkspaceRepoSlugResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
	Repository  map[string]interface{}
}
