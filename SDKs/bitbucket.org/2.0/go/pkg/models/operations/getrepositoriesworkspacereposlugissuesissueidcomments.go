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

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
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
