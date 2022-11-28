package operations

import (
	"openapi/pkg/models/shared"
)

type PostRepositoriesWorkspaceRepoSlugRefsTagsPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PostRepositoriesWorkspaceRepoSlugRefsTagsSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PostRepositoriesWorkspaceRepoSlugRefsTagsRequest struct {
	PathParams PostRepositoriesWorkspaceRepoSlugRefsTagsPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
	Security   PostRepositoriesWorkspaceRepoSlugRefsTagsSecurity
}

type PostRepositoriesWorkspaceRepoSlugRefsTagsResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
	Tag         map[string]interface{}
}
