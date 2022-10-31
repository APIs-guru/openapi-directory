package operations

import (
	"openapi/pkg/models/shared"
)

type PackagesGetPackageVersionForOrganizationPathParams struct {
	Org              string                 `pathParam:"style=simple,explode=false,name=org"`
	PackageName      string                 `pathParam:"style=simple,explode=false,name=package_name"`
	PackageType      shared.PackageTypeEnum `pathParam:"style=simple,explode=false,name=package_type"`
	PackageVersionID int64                  `pathParam:"style=simple,explode=false,name=package_version_id"`
}

type PackagesGetPackageVersionForOrganizationRequest struct {
	PathParams PackagesGetPackageVersionForOrganizationPathParams
}

type PackagesGetPackageVersionForOrganizationResponse struct {
	ContentType    string
	StatusCode     int64
	PackageVersion *shared.PackageVersion
}
