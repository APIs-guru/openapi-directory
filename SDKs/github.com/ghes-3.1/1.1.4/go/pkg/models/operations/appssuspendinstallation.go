package operations

import (
"openapi/pkg/models/shared")

type AppsSuspendInstallationPathParams struct {
    InstallationID int64 `pathParam:"style=simple,explode=false,name=installation_id"`
    
}

type AppsSuspendInstallationRequest struct {
    PathParams AppsSuspendInstallationPathParams 
    
}

type AppsSuspendInstallationResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    
}

