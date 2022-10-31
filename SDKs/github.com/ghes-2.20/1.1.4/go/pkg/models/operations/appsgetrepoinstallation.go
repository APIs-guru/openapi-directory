package operations

import (
"openapi/pkg/models/shared")

type AppsGetRepoInstallationPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type AppsGetRepoInstallationHeaders struct {
    Accept string `header:"style=simple,explode=false,name=accept"`
    
}

type AppsGetRepoInstallationRequest struct {
    PathParams AppsGetRepoInstallationPathParams 
    Headers AppsGetRepoInstallationHeaders 
    
}

type AppsGetRepoInstallationResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    InstallationGhes2 *shared.InstallationGhes2 
    
}

