package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugDownloadsFilenamePathParams struct {
	Filename  string `pathParam:"style=simple,explode=false,name=filename"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
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
