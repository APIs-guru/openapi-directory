package operations

import (
	"openapi/pkg/models/shared"
)

type CreditNotesOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CreditNotesOneQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type CreditNotesOneHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type CreditNotesOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type CreditNotesOneRequest struct {
	PathParams  CreditNotesOnePathParams
	QueryParams CreditNotesOneQueryParams
	Headers     CreditNotesOneHeaders
	Security    CreditNotesOneSecurity
}

type CreditNotesOneResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetCreditNoteResponse   *shared.GetCreditNoteResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
