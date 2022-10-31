package operations



type ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    
}

type ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody struct {
    SelectedRepositoryIds []int64 `json:"selected_repository_ids"`
    
}

type ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest struct {
    PathParams ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationPathParams 
    Request *ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody `request:"mediaType=application/json"`
    
}

type ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

