package operations

import (
	"openapi/pkg/models/shared"
)

type BillsDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type BillsDeleteQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type BillsDeleteHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type BillsDeleteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type BillsDeleteRequest struct {
	PathParams  BillsDeletePathParams
	QueryParams BillsDeleteQueryParams
	Headers     BillsDeleteHeaders
	Security    BillsDeleteSecurity
}

type BillsDeleteResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	DeleteBillResponse      *shared.DeleteBillResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
