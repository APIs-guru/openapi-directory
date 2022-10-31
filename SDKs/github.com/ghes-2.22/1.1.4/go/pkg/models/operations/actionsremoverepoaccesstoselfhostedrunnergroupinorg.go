package operations



type ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    RepositoryID int64 `pathParam:"style=simple,explode=false,name=repository_id"`
    RunnerGroupID int64 `pathParam:"style=simple,explode=false,name=runner_group_id"`
    
}

type ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgRequest struct {
    PathParams ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgPathParams 
    
}

type ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgResponse struct {
    ContentType string 
    StatusCode int64 
    
}

