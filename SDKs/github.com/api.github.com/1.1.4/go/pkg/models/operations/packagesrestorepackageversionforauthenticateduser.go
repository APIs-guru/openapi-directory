package operations

import (
"openapi/pkg/models/shared")

type PackagesRestorePackageVersionForAuthenticatedUserPathParams struct {
    PackageName string `pathParam:"style=simple,explode=false,name=package_name"`
    PackageType shared.PackageTypeEnum `pathParam:"style=simple,explode=false,name=package_type"`
    PackageVersionID int64 `pathParam:"style=simple,explode=false,name=package_version_id"`
    
}

type PackagesRestorePackageVersionForAuthenticatedUserRequest struct {
    PathParams PackagesRestorePackageVersionForAuthenticatedUserPathParams 
    
}

type PackagesRestorePackageVersionForAuthenticatedUserResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    
}

