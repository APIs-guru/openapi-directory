package operations

import (
"openapi/pkg/models/shared")

type ActionsListRunnerApplicationsForRepoPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ActionsListRunnerApplicationsForRepoRequest struct {
    PathParams ActionsListRunnerApplicationsForRepoPathParams 
    
}

type ActionsListRunnerApplicationsForRepoResponse struct {
    ContentType string 
    StatusCode int64 
    RunnerApplications []shared.RunnerApplication 
    
}

