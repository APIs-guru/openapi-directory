package operations

import (
	"openapi/pkg/models/shared"
)

type BillingGetGithubPackagesBillingOrgPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type BillingGetGithubPackagesBillingOrgRequest struct {
	PathParams BillingGetGithubPackagesBillingOrgPathParams
}

type BillingGetGithubPackagesBillingOrgResponse struct {
	ContentType          string
	StatusCode           int64
	PackagesBillingUsage *shared.PackagesBillingUsage
}
