package operations

import (
	"openapi/pkg/models/shared"
)

type PostRepositoriesWorkspaceRepoSlugIssuesPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PostRepositoriesWorkspaceRepoSlugIssuesSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PostRepositoriesWorkspaceRepoSlugIssuesSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type PostRepositoriesWorkspaceRepoSlugIssuesSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PostRepositoriesWorkspaceRepoSlugIssuesSecurity struct {
	Option1 *PostRepositoriesWorkspaceRepoSlugIssuesSecurityOption1 `security:"option"`
	Option2 *PostRepositoriesWorkspaceRepoSlugIssuesSecurityOption2 `security:"option"`
	Option3 *PostRepositoriesWorkspaceRepoSlugIssuesSecurityOption3 `security:"option"`
}

type PostRepositoriesWorkspaceRepoSlugIssuesRequest struct {
	PathParams PostRepositoriesWorkspaceRepoSlugIssuesPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
	Security   PostRepositoriesWorkspaceRepoSlugIssuesSecurity
}

type PostRepositoriesWorkspaceRepoSlugIssuesResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Error       map[string]interface{}
	Issue       map[string]interface{}
}
