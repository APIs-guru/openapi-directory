package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugBranchingModelPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugBranchingModelSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugBranchingModelRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugBranchingModelPathParams
	Security   GetRepositoriesWorkspaceRepoSlugBranchingModelSecurity
}

type GetRepositoriesWorkspaceRepoSlugBranchingModelResponse struct {
	ContentType    string
	StatusCode     int64
	BranchingModel map[string]interface{}
	Error          map[string]interface{}
}
