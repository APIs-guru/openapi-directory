package operations

import (
	"openapi/pkg/models/shared"
)

type LicensesGetForRepoPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type LicensesGetForRepoRequest struct {
	PathParams LicensesGetForRepoPathParams
}

type LicensesGetForRepoResponse struct {
	ContentType    string
	StatusCode     int64
	LicenseContent *shared.LicenseContent
}
