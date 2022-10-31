package operations

import (
"openapi/pkg/models/shared")

type PackagesGetPackageForOrganizationPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    PackageName string `pathParam:"style=simple,explode=false,name=package_name"`
    PackageType shared.PackageTypeEnum `pathParam:"style=simple,explode=false,name=package_type"`
    
}

type PackagesGetPackageForOrganizationRequest struct {
    PathParams PackagesGetPackageForOrganizationPathParams 
    
}

type PackagesGetPackageForOrganizationResponse struct {
    ContentType string 
    StatusCode int64 
    Package *shared.Package 
    
}

