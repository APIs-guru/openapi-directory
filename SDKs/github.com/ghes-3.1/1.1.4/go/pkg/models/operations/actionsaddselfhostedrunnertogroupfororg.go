package operations



type ActionsAddSelfHostedRunnerToGroupForOrgPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    RunnerGroupID int64 `pathParam:"style=simple,explode=false,name=runner_group_id"`
    RunnerID int64 `pathParam:"style=simple,explode=false,name=runner_id"`
    
}

type ActionsAddSelfHostedRunnerToGroupForOrgRequest struct {
    PathParams ActionsAddSelfHostedRunnerToGroupForOrgPathParams 
    
}

type ActionsAddSelfHostedRunnerToGroupForOrgResponse struct {
    ContentType string 
    StatusCode int64 
    
}

