package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugMilestonesPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugMilestonesSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugMilestonesRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugMilestonesPathParams
	Security   GetRepositoriesWorkspaceRepoSlugMilestonesSecurity
}

type GetRepositoriesWorkspaceRepoSlugMilestonesResponse struct {
	ContentType         string
	StatusCode          int64
	Error               map[string]interface{}
	PaginatedMilestones *shared.PaginatedMilestones
}
