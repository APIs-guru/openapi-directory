package operations

import (
	"openapi/pkg/models/shared"
)

type PackagesDeletePackageVersionForAuthenticatedUserPathParams struct {
	PackageName      string                 `pathParam:"style=simple,explode=false,name=package_name"`
	PackageType      shared.PackageTypeEnum `pathParam:"style=simple,explode=false,name=package_type"`
	PackageVersionID int64                  `pathParam:"style=simple,explode=false,name=package_version_id"`
}

type PackagesDeletePackageVersionForAuthenticatedUserRequest struct {
	PathParams PackagesDeletePackageVersionForAuthenticatedUserPathParams
}

type PackagesDeletePackageVersionForAuthenticatedUserResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
}
