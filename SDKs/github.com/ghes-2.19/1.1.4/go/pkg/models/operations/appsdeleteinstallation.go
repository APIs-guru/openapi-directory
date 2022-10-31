package operations

import (
"openapi/pkg/models/shared")

type AppsDeleteInstallationPathParams struct {
    InstallationID int64 `pathParam:"style=simple,explode=false,name=installation_id"`
    
}

type AppsDeleteInstallationHeaders struct {
    Accept string `header:"style=simple,explode=false,name=accept"`
    
}

type AppsDeleteInstallationRequest struct {
    PathParams AppsDeleteInstallationPathParams 
    Headers AppsDeleteInstallationHeaders 
    
}

type AppsDeleteInstallationResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    
}

