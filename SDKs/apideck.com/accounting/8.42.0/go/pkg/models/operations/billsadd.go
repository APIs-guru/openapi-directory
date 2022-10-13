package operations

import (
	"openapi/pkg/models/shared"
)

type BillsAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type BillsAddHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type BillsAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type BillsAddRequest struct {
	QueryParams BillsAddQueryParams
	Headers     BillsAddHeaders
	Request     shared.Bill `request:"mediaType=application/json"`
	Security    BillsAddSecurity
}

type BillsAddResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	CreateBillResponse      *shared.CreateBillResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
