package operations



type ActionsDeleteSelfHostedRunnerFromOrgPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    RunnerID int64 `pathParam:"style=simple,explode=false,name=runner_id"`
    
}

type ActionsDeleteSelfHostedRunnerFromOrgRequest struct {
    PathParams ActionsDeleteSelfHostedRunnerFromOrgPathParams 
    
}

type ActionsDeleteSelfHostedRunnerFromOrgResponse struct {
    ContentType string 
    StatusCode int64 
    
}

