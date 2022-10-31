package operations

import (
"openapi/pkg/models/shared")

type AppsListInstallationsQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type AppsListInstallationsHeaders struct {
    Accept string `header:"style=simple,explode=false,name=accept"`
    
}

type AppsListInstallationsRequest struct {
    QueryParams AppsListInstallationsQueryParams 
    Headers AppsListInstallationsHeaders 
    
}

type AppsListInstallationsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    InstallationGhes2s []shared.InstallationGhes2 
    
}

