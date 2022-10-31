package operations

import (
"openapi/pkg/models/shared")

type AppsGetRepoInstallationPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type AppsGetRepoInstallationRequest struct {
    PathParams AppsGetRepoInstallationPathParams 
    
}

type AppsGetRepoInstallationResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    Installation *shared.Installation 
    
}

