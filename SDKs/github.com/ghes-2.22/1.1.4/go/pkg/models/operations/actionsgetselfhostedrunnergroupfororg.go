package operations

import (
"openapi/pkg/models/shared")

type ActionsGetSelfHostedRunnerGroupForOrgPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    RunnerGroupID int64 `pathParam:"style=simple,explode=false,name=runner_group_id"`
    
}

type ActionsGetSelfHostedRunnerGroupForOrgRequest struct {
    PathParams ActionsGetSelfHostedRunnerGroupForOrgPathParams 
    
}

type ActionsGetSelfHostedRunnerGroupForOrgResponse struct {
    ContentType string 
    StatusCode int64 
    RunnerGroupsOrg *shared.RunnerGroupsOrg 
    
}

