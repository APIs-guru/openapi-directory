package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIV1NonprofitsShowQueryParams struct {
	ID string `queryParam:"style=form,explode=true,name=id"`
}

type GetAPIV1NonprofitsShowSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type GetAPIV1NonprofitsShowRequest struct {
	QueryParams GetAPIV1NonprofitsShowQueryParams
	Security    GetAPIV1NonprofitsShowSecurity
}

type GetAPIV1NonprofitsShowResponse struct {
	ContentType string
	StatusCode  int64
}
