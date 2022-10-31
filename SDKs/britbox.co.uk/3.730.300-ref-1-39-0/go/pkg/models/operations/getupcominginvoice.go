package operations

import (
	"openapi/pkg/models/shared"
)

type GetUpcomingInvoiceQueryParams struct {
	Lang *string `queryParam:"style=form,explode=true,name=lang"`
}

type GetUpcomingInvoiceSecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type GetUpcomingInvoiceRequest struct {
	QueryParams GetUpcomingInvoiceQueryParams
	Security    GetUpcomingInvoiceSecurity
}

type GetUpcomingInvoiceResponse struct {
	ContentType            string
	ItvGetDiscountResponse *shared.ItvGetDiscountResponse
	ServiceError           *shared.ServiceError
	StatusCode             int64
}
