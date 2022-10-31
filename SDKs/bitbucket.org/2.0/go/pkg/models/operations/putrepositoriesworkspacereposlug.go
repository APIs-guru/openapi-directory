package operations

import (
	"openapi/pkg/models/shared"
)

type PutRepositoriesWorkspaceRepoSlugPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PutRepositoriesWorkspaceRepoSlugSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PutRepositoriesWorkspaceRepoSlugSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type PutRepositoriesWorkspaceRepoSlugSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PutRepositoriesWorkspaceRepoSlugSecurity struct {
	Option1 *PutRepositoriesWorkspaceRepoSlugSecurityOption1 `security:"option"`
	Option2 *PutRepositoriesWorkspaceRepoSlugSecurityOption2 `security:"option"`
	Option3 *PutRepositoriesWorkspaceRepoSlugSecurityOption3 `security:"option"`
}

type PutRepositoriesWorkspaceRepoSlugRequest struct {
	PathParams PutRepositoriesWorkspaceRepoSlugPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
	Security   PutRepositoriesWorkspaceRepoSlugSecurity
}

type PutRepositoriesWorkspaceRepoSlugResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Error       map[string]interface{}
	Repository  map[string]interface{}
}
