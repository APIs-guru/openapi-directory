package operations



type EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams struct {
    Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
    OrgID int64 `pathParam:"style=simple,explode=false,name=org_id"`
    RunnerGroupID int64 `pathParam:"style=simple,explode=false,name=runner_group_id"`
    
}

type EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest struct {
    PathParams EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams 
    
}

type EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse struct {
    ContentType string 
    StatusCode int64 
    
}

