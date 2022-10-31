package operations

import (
"openapi/pkg/models/shared")

type AppsGetOrgInstallationPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    
}

type AppsGetOrgInstallationRequest struct {
    PathParams AppsGetOrgInstallationPathParams 
    
}

type AppsGetOrgInstallationResponse struct {
    ContentType string 
    StatusCode int64 
    InstallationGhes2 *shared.InstallationGhes2 
    
}

