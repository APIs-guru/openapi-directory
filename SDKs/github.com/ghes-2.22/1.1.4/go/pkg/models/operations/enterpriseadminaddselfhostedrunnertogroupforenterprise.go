package operations



type EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprisePathParams struct {
    Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
    RunnerGroupID int64 `pathParam:"style=simple,explode=false,name=runner_group_id"`
    RunnerID int64 `pathParam:"style=simple,explode=false,name=runner_id"`
    
}

type EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequest struct {
    PathParams EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprisePathParams 
    
}

type EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponse struct {
    ContentType string 
    StatusCode int64 
    
}

