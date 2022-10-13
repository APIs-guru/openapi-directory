package operations

import (
	"openapi/pkg/models/shared"
)

type PackagesGetPackageForUserPathParams struct {
	PackageName string                 `pathParam:"style=simple,explode=false,name=package_name"`
	PackageType shared.PackageTypeEnum `pathParam:"style=simple,explode=false,name=package_type"`
	Username    string                 `pathParam:"style=simple,explode=false,name=username"`
}

type PackagesGetPackageForUserRequest struct {
	PathParams PackagesGetPackageForUserPathParams
}

type PackagesGetPackageForUserResponse struct {
	ContentType string
	StatusCode  int64
	Package     *shared.Package
}
