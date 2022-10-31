package operations



type ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    RepositoryID int64 `pathParam:"style=simple,explode=false,name=repository_id"`
    RunnerGroupID int64 `pathParam:"style=simple,explode=false,name=runner_group_id"`
    
}

type ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest struct {
    PathParams ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgPathParams 
    
}

type ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgResponse struct {
    ContentType string 
    StatusCode int64 
    
}

