package operations

import (
	"openapi/pkg/models/shared"
)

type PackagesDeletePackageForOrgPathParams struct {
	Org         string                 `pathParam:"style=simple,explode=false,name=org"`
	PackageName string                 `pathParam:"style=simple,explode=false,name=package_name"`
	PackageType shared.PackageTypeEnum `pathParam:"style=simple,explode=false,name=package_type"`
}

type PackagesDeletePackageForOrgRequest struct {
	PathParams PackagesDeletePackageForOrgPathParams
}

type PackagesDeletePackageForOrgResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
}
