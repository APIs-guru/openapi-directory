package operations

import (
	"openapi/pkg/models/shared"
)

type CreditNotesAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type CreditNotesAddHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type CreditNotesAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type CreditNotesAddRequest struct {
	QueryParams CreditNotesAddQueryParams
	Headers     CreditNotesAddHeaders
	Request     shared.CreditNote `request:"mediaType=application/json"`
	Security    CreditNotesAddSecurity
}

type CreditNotesAddResponse struct {
	BadRequestResponse       *interface{}
	ContentType              string
	CreateCreditNoteResponse *shared.CreateCreditNoteResponse
	NotFoundResponse         *interface{}
	PaymentRequiredResponse  *interface{}
	StatusCode               int64
	UnauthorizedResponse     *interface{}
	UnexpectedErrorResponse  *interface{}
	UnprocessableResponse    *interface{}
}
