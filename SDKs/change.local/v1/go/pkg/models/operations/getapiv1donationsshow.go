package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIV1DonationsShowQueryParams struct {
	ID string `queryParam:"style=form,explode=true,name=id"`
}

type GetAPIV1DonationsShowSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type GetAPIV1DonationsShowRequest struct {
	QueryParams GetAPIV1DonationsShowQueryParams
	Security    GetAPIV1DonationsShowSecurity
}

type GetAPIV1DonationsShowResponse struct {
	ContentType string
	StatusCode  int64
}
