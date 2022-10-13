package operations

import (
	"openapi/pkg/models/shared"
)

type CreditNotesAllQueryParams struct {
	Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
	Limit  *int64  `queryParam:"style=form,explode=true,name=limit"`
	Raw    *bool   `queryParam:"style=form,explode=true,name=raw"`
}

type CreditNotesAllHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type CreditNotesAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type CreditNotesAllRequest struct {
	QueryParams CreditNotesAllQueryParams
	Headers     CreditNotesAllHeaders
	Security    CreditNotesAllSecurity
}

type CreditNotesAllResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetCreditNotesResponse  *shared.GetCreditNotesResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
