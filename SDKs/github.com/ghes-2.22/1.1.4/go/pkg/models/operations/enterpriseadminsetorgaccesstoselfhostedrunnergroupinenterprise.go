package operations



type EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams struct {
    Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
    RunnerGroupID int64 `pathParam:"style=simple,explode=false,name=runner_group_id"`
    
}

type EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody struct {
    SelectedOrganizationIds []int64 `json:"selected_organization_ids"`
    
}

type EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest struct {
    PathParams EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams 
    Request *EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody `request:"mediaType=application/json"`
    
}

type EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse struct {
    ContentType string 
    StatusCode int64 
    
}

