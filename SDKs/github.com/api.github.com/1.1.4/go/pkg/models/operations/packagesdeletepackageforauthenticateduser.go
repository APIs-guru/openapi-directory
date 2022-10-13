package operations

import (
	"openapi/pkg/models/shared"
)

type PackagesDeletePackageForAuthenticatedUserPathParams struct {
	PackageName string                 `pathParam:"style=simple,explode=false,name=package_name"`
	PackageType shared.PackageTypeEnum `pathParam:"style=simple,explode=false,name=package_type"`
}

type PackagesDeletePackageForAuthenticatedUserRequest struct {
	PathParams PackagesDeletePackageForAuthenticatedUserPathParams
}

type PackagesDeletePackageForAuthenticatedUserResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
}
