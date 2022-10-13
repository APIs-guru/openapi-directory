package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugDownloadsFilenamePathParams struct {
	Filename  string `pathParam:"style=simple,explode=false,name=filename"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurity struct {
	Option1 *GetRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurityOption1 `security:"option"`
	Option2 *GetRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurityOption2 `security:"option"`
	Option3 *GetRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurityOption3 `security:"option"`
}

type GetRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugDownloadsFilenamePathParams
	Security   GetRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurity
}

type GetRepositoriesWorkspaceRepoSlugDownloadsFilenameResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
