package operations



type EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprisePathParams struct {
    Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
    RunnerGroupID int64 `pathParam:"style=simple,explode=false,name=runner_group_id"`
    RunnerID int64 `pathParam:"style=simple,explode=false,name=runner_id"`
    
}

type EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseRequest struct {
    PathParams EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprisePathParams 
    
}

type EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseResponse struct {
    ContentType string 
    StatusCode int64 
    
}

