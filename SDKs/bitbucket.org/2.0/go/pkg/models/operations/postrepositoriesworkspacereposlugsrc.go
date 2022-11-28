package operations

import (
	"openapi/pkg/models/shared"
)

type PostRepositoriesWorkspaceRepoSlugSrcPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PostRepositoriesWorkspaceRepoSlugSrcQueryParams struct {
	Author  *string `queryParam:"style=form,explode=true,name=author"`
	Branch  *string `queryParam:"style=form,explode=true,name=branch"`
	Files   *string `queryParam:"style=form,explode=true,name=files"`
	Message *string `queryParam:"style=form,explode=true,name=message"`
	Parents *string `queryParam:"style=form,explode=true,name=parents"`
}

type PostRepositoriesWorkspaceRepoSlugSrcSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PostRepositoriesWorkspaceRepoSlugSrcRequest struct {
	PathParams  PostRepositoriesWorkspaceRepoSlugSrcPathParams
	QueryParams PostRepositoriesWorkspaceRepoSlugSrcQueryParams
	Security    PostRepositoriesWorkspaceRepoSlugSrcSecurity
}

type PostRepositoriesWorkspaceRepoSlugSrcResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
