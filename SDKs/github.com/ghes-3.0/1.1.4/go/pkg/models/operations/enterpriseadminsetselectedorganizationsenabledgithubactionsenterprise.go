package operations



type EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprisePathParams struct {
    Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
    
}

type EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequestBody struct {
    SelectedOrganizationIds []int64 `json:"selected_organization_ids"`
    
}

type EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequest struct {
    PathParams EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprisePathParams 
    Request *EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequestBody `request:"mediaType=application/json"`
    
}

type EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseResponse struct {
    ContentType string 
    StatusCode int64 
    
}

