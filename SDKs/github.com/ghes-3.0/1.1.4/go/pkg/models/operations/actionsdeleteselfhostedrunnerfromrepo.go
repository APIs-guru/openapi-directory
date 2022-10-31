package operations



type ActionsDeleteSelfHostedRunnerFromRepoPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    RunnerID int64 `pathParam:"style=simple,explode=false,name=runner_id"`
    
}

type ActionsDeleteSelfHostedRunnerFromRepoRequest struct {
    PathParams ActionsDeleteSelfHostedRunnerFromRepoPathParams 
    
}

type ActionsDeleteSelfHostedRunnerFromRepoResponse struct {
    ContentType string 
    StatusCode int64 
    
}

