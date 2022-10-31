package operations

import (
"openapi/pkg/models/shared")

type PackagesRestorePackageForOrgPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    PackageName string `pathParam:"style=simple,explode=false,name=package_name"`
    PackageType shared.PackageTypeEnum `pathParam:"style=simple,explode=false,name=package_type"`
    
}

type PackagesRestorePackageForOrgQueryParams struct {
    Token *string `queryParam:"style=form,explode=true,name=token"`
    
}

type PackagesRestorePackageForOrgRequest struct {
    PathParams PackagesRestorePackageForOrgPathParams 
    QueryParams PackagesRestorePackageForOrgQueryParams 
    
}

type PackagesRestorePackageForOrgResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    
}

