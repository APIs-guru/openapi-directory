package operations

import (
"openapi/pkg/models/shared")

type ActionsGetSelfHostedRunnerForRepoPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    RunnerID int64 `pathParam:"style=simple,explode=false,name=runner_id"`
    
}

type ActionsGetSelfHostedRunnerForRepoRequest struct {
    PathParams ActionsGetSelfHostedRunnerForRepoPathParams 
    
}

type ActionsGetSelfHostedRunnerForRepoResponse struct {
    ContentType string 
    StatusCode int64 
    Runner *shared.Runner 
    
}

