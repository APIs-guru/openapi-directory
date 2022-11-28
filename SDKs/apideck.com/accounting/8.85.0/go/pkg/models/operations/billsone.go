package operations

import (
	"openapi/pkg/models/shared"
)

type BillsOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type BillsOneQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type BillsOneHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type BillsOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type BillsOneRequest struct {
	PathParams  BillsOnePathParams
	QueryParams BillsOneQueryParams
	Headers     BillsOneHeaders
	Security    BillsOneSecurity
}

type BillsOneResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	GetBillResponse         *shared.GetBillResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
