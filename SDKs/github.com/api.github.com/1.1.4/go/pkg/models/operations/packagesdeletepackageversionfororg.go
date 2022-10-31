package operations

import (
"openapi/pkg/models/shared")

type PackagesDeletePackageVersionForOrgPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    PackageName string `pathParam:"style=simple,explode=false,name=package_name"`
    PackageType shared.PackageTypeEnum `pathParam:"style=simple,explode=false,name=package_type"`
    PackageVersionID int64 `pathParam:"style=simple,explode=false,name=package_version_id"`
    
}

type PackagesDeletePackageVersionForOrgRequest struct {
    PathParams PackagesDeletePackageVersionForOrgPathParams 
    
}

type PackagesDeletePackageVersionForOrgResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    
}

