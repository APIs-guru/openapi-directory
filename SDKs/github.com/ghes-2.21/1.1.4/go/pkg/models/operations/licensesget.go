package operations

import (
	"openapi/pkg/models/shared"
)

type LicensesGetPathParams struct {
	License string `pathParam:"style=simple,explode=false,name=license"`
}

type LicensesGetRequest struct {
	PathParams LicensesGetPathParams
}

type LicensesGetResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
	License     *shared.License
}
