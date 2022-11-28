package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIDPathParams struct {
	MilestoneID int64  `pathParam:"style=simple,explode=false,name=milestone_id"`
	RepoSlug    string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace   string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIDSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIDRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIDPathParams
	Security   GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIDSecurity
}

type GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIDResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
	Milestone   map[string]interface{}
}
