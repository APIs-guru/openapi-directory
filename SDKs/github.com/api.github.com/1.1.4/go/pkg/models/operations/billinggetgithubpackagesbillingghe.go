package operations

import (
	"openapi/pkg/models/shared"
)

type BillingGetGithubPackagesBillingGhePathParams struct {
	Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
}

type BillingGetGithubPackagesBillingGheRequest struct {
	PathParams BillingGetGithubPackagesBillingGhePathParams
}

type BillingGetGithubPackagesBillingGheResponse struct {
	ContentType          string
	StatusCode           int64
	PackagesBillingUsage *shared.PackagesBillingUsage
}
