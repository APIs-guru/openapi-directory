package operations

import (
"openapi/pkg/models/shared")

type PackagesGetPackageForAuthenticatedUserPathParams struct {
    PackageName string `pathParam:"style=simple,explode=false,name=package_name"`
    PackageType shared.PackageTypeEnum `pathParam:"style=simple,explode=false,name=package_type"`
    
}

type PackagesGetPackageForAuthenticatedUserRequest struct {
    PathParams PackagesGetPackageForAuthenticatedUserPathParams 
    
}

type PackagesGetPackageForAuthenticatedUserResponse struct {
    ContentType string 
    StatusCode int64 
    Package *shared.Package 
    
}

