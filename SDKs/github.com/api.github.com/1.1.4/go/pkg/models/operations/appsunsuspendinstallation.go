package operations

import (
"openapi/pkg/models/shared")

type AppsUnsuspendInstallationPathParams struct {
    InstallationID int64 `pathParam:"style=simple,explode=false,name=installation_id"`
    
}

type AppsUnsuspendInstallationRequest struct {
    PathParams AppsUnsuspendInstallationPathParams 
    
}

type AppsUnsuspendInstallationResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    
}

