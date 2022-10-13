package operations

import (
	"openapi/pkg/models/shared"
)

type PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams struct {
	RepoSlug       string `pathParam:"style=simple,explode=false,name=repo_slug"`
	TargetUsername string `pathParam:"style=simple,explode=false,name=target_username"`
	Workspace      string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity struct {
	Option1 *PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurityOption1 `security:"option"`
	Option2 *PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurityOption2 `security:"option"`
	Option3 *PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurityOption3 `security:"option"`
}

type PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest struct {
	PathParams PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams
	Security   PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity
}

type PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
