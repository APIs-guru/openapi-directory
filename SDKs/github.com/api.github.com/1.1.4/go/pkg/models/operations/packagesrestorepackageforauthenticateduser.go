package operations

import (
"openapi/pkg/models/shared")

type PackagesRestorePackageForAuthenticatedUserPathParams struct {
    PackageName string `pathParam:"style=simple,explode=false,name=package_name"`
    PackageType shared.PackageTypeEnum `pathParam:"style=simple,explode=false,name=package_type"`
    
}

type PackagesRestorePackageForAuthenticatedUserQueryParams struct {
    Token *string `queryParam:"style=form,explode=true,name=token"`
    
}

type PackagesRestorePackageForAuthenticatedUserRequest struct {
    PathParams PackagesRestorePackageForAuthenticatedUserPathParams 
    QueryParams PackagesRestorePackageForAuthenticatedUserQueryParams 
    
}

type PackagesRestorePackageForAuthenticatedUserResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    
}

