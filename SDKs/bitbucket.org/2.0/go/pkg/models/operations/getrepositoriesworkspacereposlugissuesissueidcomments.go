package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsPathParams struct {
	IssueID   string `pathParam:"style=simple,explode=false,name=issue_id"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsQueryParams struct {
	Q *string `queryParam:"style=form,explode=true,name=q"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsSecurity struct {
	Option1 *GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsSecurityOption1 `security:"option"`
	Option2 *GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsSecurityOption2 `security:"option"`
	Option3 *GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsSecurityOption3 `security:"option"`
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsRequest struct {
	PathParams  GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsPathParams
	QueryParams GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsQueryParams
	Security    GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsSecurity
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsResponse struct {
	ContentType            string
	StatusCode             int64
	PaginatedIssueComments *shared.PaginatedIssueComments
}
