package operations



type ActionsEnableSelectedRepositoryGithubActionsOrganizationPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    RepositoryID int64 `pathParam:"style=simple,explode=false,name=repository_id"`
    
}

type ActionsEnableSelectedRepositoryGithubActionsOrganizationRequest struct {
    PathParams ActionsEnableSelectedRepositoryGithubActionsOrganizationPathParams 
    
}

type ActionsEnableSelectedRepositoryGithubActionsOrganizationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

