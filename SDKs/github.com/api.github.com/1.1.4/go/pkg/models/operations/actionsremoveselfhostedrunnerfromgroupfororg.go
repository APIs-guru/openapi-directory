package operations



type ActionsRemoveSelfHostedRunnerFromGroupForOrgPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    RunnerGroupID int64 `pathParam:"style=simple,explode=false,name=runner_group_id"`
    RunnerID int64 `pathParam:"style=simple,explode=false,name=runner_id"`
    
}

type ActionsRemoveSelfHostedRunnerFromGroupForOrgRequest struct {
    PathParams ActionsRemoveSelfHostedRunnerFromGroupForOrgPathParams 
    
}

type ActionsRemoveSelfHostedRunnerFromGroupForOrgResponse struct {
    ContentType string 
    StatusCode int64 
    
}

