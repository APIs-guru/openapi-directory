package operations

import (
	"openapi/pkg/models/shared"
)

type BillsAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type BillsAddHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type BillsAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type BillsAddRequest struct {
	QueryParams BillsAddQueryParams
	Headers     BillsAddHeaders
	Request     shared.BillInput `request:"mediaType=application/json"`
	Security    BillsAddSecurity
}

type BillsAddResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	CreateBillResponse      *shared.CreateBillResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
