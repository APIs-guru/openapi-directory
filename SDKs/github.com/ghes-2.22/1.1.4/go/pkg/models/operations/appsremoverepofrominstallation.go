package operations

import (
"openapi/pkg/models/shared")

type AppsRemoveRepoFromInstallationPathParams struct {
    InstallationID int64 `pathParam:"style=simple,explode=false,name=installation_id"`
    RepositoryID int64 `pathParam:"style=simple,explode=false,name=repository_id"`
    
}

type AppsRemoveRepoFromInstallationRequest struct {
    PathParams AppsRemoveRepoFromInstallationPathParams 
    
}

type AppsRemoveRepoFromInstallationResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    
}

