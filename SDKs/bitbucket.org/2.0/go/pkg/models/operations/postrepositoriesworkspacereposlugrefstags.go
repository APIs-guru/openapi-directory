package operations

import (
	"openapi/pkg/models/shared"
)

type PostRepositoriesWorkspaceRepoSlugRefsTagsPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PostRepositoriesWorkspaceRepoSlugRefsTagsSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PostRepositoriesWorkspaceRepoSlugRefsTagsSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type PostRepositoriesWorkspaceRepoSlugRefsTagsSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PostRepositoriesWorkspaceRepoSlugRefsTagsSecurity struct {
	Option1 *PostRepositoriesWorkspaceRepoSlugRefsTagsSecurityOption1 `security:"option"`
	Option2 *PostRepositoriesWorkspaceRepoSlugRefsTagsSecurityOption2 `security:"option"`
	Option3 *PostRepositoriesWorkspaceRepoSlugRefsTagsSecurityOption3 `security:"option"`
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
