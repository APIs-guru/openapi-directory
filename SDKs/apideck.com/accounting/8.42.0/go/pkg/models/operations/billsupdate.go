package operations

import (
	"openapi/pkg/models/shared"
)

type BillsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type BillsUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type BillsUpdateHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type BillsUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type BillsUpdateRequest struct {
	PathParams  BillsUpdatePathParams
	QueryParams BillsUpdateQueryParams
	Headers     BillsUpdateHeaders
	Request     shared.Bill `request:"mediaType=application/json"`
	Security    BillsUpdateSecurity
}

type BillsUpdateResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
	UpdateBillResponse      *shared.UpdateBillResponse
}
