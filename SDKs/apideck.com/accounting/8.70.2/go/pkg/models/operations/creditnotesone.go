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
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
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
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	GetCreditNoteResponse   *shared.GetCreditNoteResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
