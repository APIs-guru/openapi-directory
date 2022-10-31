package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugMilestonesPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugMilestonesSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetRepositoriesWorkspaceRepoSlugMilestonesSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetRepositoriesWorkspaceRepoSlugMilestonesSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugMilestonesSecurity struct {
	Option1 *GetRepositoriesWorkspaceRepoSlugMilestonesSecurityOption1 `security:"option"`
	Option2 *GetRepositoriesWorkspaceRepoSlugMilestonesSecurityOption2 `security:"option"`
	Option3 *GetRepositoriesWorkspaceRepoSlugMilestonesSecurityOption3 `security:"option"`
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
