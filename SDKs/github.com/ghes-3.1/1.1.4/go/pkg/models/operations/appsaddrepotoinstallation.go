package operations

import (
"openapi/pkg/models/shared")

type AppsAddRepoToInstallationPathParams struct {
    InstallationID int64 `pathParam:"style=simple,explode=false,name=installation_id"`
    RepositoryID int64 `pathParam:"style=simple,explode=false,name=repository_id"`
    
}

type AppsAddRepoToInstallationRequest struct {
    PathParams AppsAddRepoToInstallationPathParams 
    
}

type AppsAddRepoToInstallationResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    
}

