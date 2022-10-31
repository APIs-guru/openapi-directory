package operations

import (
"openapi/pkg/models/shared")

type PackagesGetPackageVersionForAuthenticatedUserPathParams struct {
    PackageName string `pathParam:"style=simple,explode=false,name=package_name"`
    PackageType shared.PackageTypeEnum `pathParam:"style=simple,explode=false,name=package_type"`
    PackageVersionID int64 `pathParam:"style=simple,explode=false,name=package_version_id"`
    
}

type PackagesGetPackageVersionForAuthenticatedUserRequest struct {
    PathParams PackagesGetPackageVersionForAuthenticatedUserPathParams 
    
}

type PackagesGetPackageVersionForAuthenticatedUserResponse struct {
    ContentType string 
    StatusCode int64 
    PackageVersion *shared.PackageVersion 
    
}

