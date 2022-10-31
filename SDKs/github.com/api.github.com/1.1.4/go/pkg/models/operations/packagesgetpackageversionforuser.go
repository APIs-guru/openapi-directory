package operations

import (
"openapi/pkg/models/shared")

type PackagesGetPackageVersionForUserPathParams struct {
    PackageName string `pathParam:"style=simple,explode=false,name=package_name"`
    PackageType shared.PackageTypeEnum `pathParam:"style=simple,explode=false,name=package_type"`
    PackageVersionID int64 `pathParam:"style=simple,explode=false,name=package_version_id"`
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type PackagesGetPackageVersionForUserRequest struct {
    PathParams PackagesGetPackageVersionForUserPathParams 
    
}

type PackagesGetPackageVersionForUserResponse struct {
    ContentType string 
    StatusCode int64 
    PackageVersion *shared.PackageVersion 
    
}

