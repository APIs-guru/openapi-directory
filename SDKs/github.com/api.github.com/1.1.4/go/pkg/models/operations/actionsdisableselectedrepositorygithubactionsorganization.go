package operations

type ActionsDisableSelectedRepositoryGithubActionsOrganizationPathParams struct {
	Org          string `pathParam:"style=simple,explode=false,name=org"`
	RepositoryID int64  `pathParam:"style=simple,explode=false,name=repository_id"`
}

type ActionsDisableSelectedRepositoryGithubActionsOrganizationRequest struct {
	PathParams ActionsDisableSelectedRepositoryGithubActionsOrganizationPathParams
}

type ActionsDisableSelectedRepositoryGithubActionsOrganizationResponse struct {
	ContentType string
	StatusCode  int64
}
