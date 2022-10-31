package operations

import (
	"openapi/pkg/models/shared"
)

type PackagesGetAllPackageVersionsForPackageOwnedByOrgPathParams struct {
	Org         string                 `pathParam:"style=simple,explode=false,name=org"`
	PackageName string                 `pathParam:"style=simple,explode=false,name=package_name"`
	PackageType shared.PackageTypeEnum `pathParam:"style=simple,explode=false,name=package_type"`
}

type PackagesGetAllPackageVersionsForPackageOwnedByOrgStateEnum string

const (
	PackagesGetAllPackageVersionsForPackageOwnedByOrgStateEnumActive  PackagesGetAllPackageVersionsForPackageOwnedByOrgStateEnum = "active"
	PackagesGetAllPackageVersionsForPackageOwnedByOrgStateEnumDeleted PackagesGetAllPackageVersionsForPackageOwnedByOrgStateEnum = "deleted"
)

type PackagesGetAllPackageVersionsForPackageOwnedByOrgQueryParams struct {
	Page    *int64                                                      `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64                                                      `queryParam:"style=form,explode=true,name=per_page"`
	State   *PackagesGetAllPackageVersionsForPackageOwnedByOrgStateEnum `queryParam:"style=form,explode=true,name=state"`
}

type PackagesGetAllPackageVersionsForPackageOwnedByOrgRequest struct {
	PathParams  PackagesGetAllPackageVersionsForPackageOwnedByOrgPathParams
	QueryParams PackagesGetAllPackageVersionsForPackageOwnedByOrgQueryParams
}

type PackagesGetAllPackageVersionsForPackageOwnedByOrgResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	PackageVersions []shared.PackageVersion
}
