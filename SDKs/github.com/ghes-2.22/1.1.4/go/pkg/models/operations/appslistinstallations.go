package operations

import (
"time"
"openapi/pkg/models/shared")

type AppsListInstallationsQueryParams struct {
    Outdated *string `queryParam:"style=form,explode=true,name=outdated"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    Since *time.Time `queryParam:"style=form,explode=true,name=since"`
    
}

type AppsListInstallationsRequest struct {
    QueryParams AppsListInstallationsQueryParams 
    
}

type AppsListInstallationsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    InstallationGhes2s []shared.InstallationGhes2 
    
}

