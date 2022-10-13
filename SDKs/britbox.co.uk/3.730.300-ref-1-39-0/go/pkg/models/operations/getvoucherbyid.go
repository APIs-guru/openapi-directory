package operations

import (
	"openapi/pkg/models/shared"
)

type GetVoucherByIDPathParams struct {
	PlanID    string `pathParam:"style=simple,explode=false,name=planId"`
	VoucherID string `pathParam:"style=simple,explode=false,name=voucherId"`
}

type GetVoucherByIDQueryParams struct {
	Lang *string `queryParam:"style=form,explode=true,name=lang"`
}

type GetVoucherByIDSecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type GetVoucherByIDRequest struct {
	PathParams  GetVoucherByIDPathParams
	QueryParams GetVoucherByIDQueryParams
	Security    GetVoucherByIDSecurity
}

type GetVoucherByIDResponse struct {
	ContentType  string
	ItvVoucher   *shared.ItvVoucher
	ServiceError *shared.ServiceError
	StatusCode   int64
}
