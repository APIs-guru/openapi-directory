package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams struct {
	RepoSlug       string `pathParam:"style=simple,explode=false,name=repo_slug"`
	TargetUsername string `pathParam:"style=simple,explode=false,name=target_username"`
	Workspace      string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams
	Security   GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity
}

type GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
