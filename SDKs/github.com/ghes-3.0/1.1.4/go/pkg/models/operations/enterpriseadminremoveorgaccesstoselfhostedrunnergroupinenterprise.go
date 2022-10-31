package operations



type EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams struct {
    Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
    OrgID int64 `pathParam:"style=simple,explode=false,name=org_id"`
    RunnerGroupID int64 `pathParam:"style=simple,explode=false,name=runner_group_id"`
    
}

type EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest struct {
    PathParams EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams 
    
}

type EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse struct {
    ContentType string 
    StatusCode int64 
    
}

