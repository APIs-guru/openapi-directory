package operations

import (
	"openapi/pkg/models/shared"
)

type CheckVoucherPathParams struct {
	Platform string `pathParam:"style=simple,explode=false,name=platform"`
}

type CheckVoucherQueryParams struct {
	Lang *string `queryParam:"style=form,explode=true,name=lang"`
}

type CheckVoucherSecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type CheckVoucherRequest struct {
	PathParams  CheckVoucherPathParams
	QueryParams CheckVoucherQueryParams
	Request     shared.ItvVoucherRequest `request:"mediaType=application/json"`
	Security    CheckVoucherSecurity
}

type CheckVoucherResponse struct {
	ContentType  string
	ItvVoucher   *shared.ItvVoucher
	ServiceError *shared.ServiceError
	StatusCode   int64
}
