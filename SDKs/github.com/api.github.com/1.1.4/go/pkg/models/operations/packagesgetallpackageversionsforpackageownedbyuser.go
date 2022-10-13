package operations

import (
	"openapi/pkg/models/shared"
)

type PackagesGetAllPackageVersionsForPackageOwnedByUserPathParams struct {
	PackageName string                 `pathParam:"style=simple,explode=false,name=package_name"`
	PackageType shared.PackageTypeEnum `pathParam:"style=simple,explode=false,name=package_type"`
	Username    string                 `pathParam:"style=simple,explode=false,name=username"`
}

type PackagesGetAllPackageVersionsForPackageOwnedByUserRequest struct {
	PathParams PackagesGetAllPackageVersionsForPackageOwnedByUserPathParams
}

type PackagesGetAllPackageVersionsForPackageOwnedByUserResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	PackageVersions []shared.PackageVersion
}
