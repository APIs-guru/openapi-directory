package operations

import (
"openapi/pkg/models/shared")

type PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserPathParams struct {
    PackageName string `pathParam:"style=simple,explode=false,name=package_name"`
    PackageType shared.PackageTypeEnum `pathParam:"style=simple,explode=false,name=package_type"`
    
}


type PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserStateEnum string

const (
    PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserStateEnumActive PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserStateEnum = "active"
PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserStateEnumDeleted PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserStateEnum = "deleted"
)


type PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    State *PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserStateEnum `queryParam:"style=form,explode=true,name=state"`
    
}

type PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserRequest struct {
    PathParams PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserPathParams 
    QueryParams PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserQueryParams 
    
}

type PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    PackageVersions []shared.PackageVersion 
    
}

