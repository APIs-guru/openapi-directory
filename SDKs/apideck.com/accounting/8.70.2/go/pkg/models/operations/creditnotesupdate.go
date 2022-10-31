package operations

import (
	"openapi/pkg/models/shared"
)

type CreditNotesUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CreditNotesUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type CreditNotesUpdateHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type CreditNotesUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type CreditNotesUpdateRequest struct {
	PathParams  CreditNotesUpdatePathParams
	QueryParams CreditNotesUpdateQueryParams
	Headers     CreditNotesUpdateHeaders
	Request     shared.CreditNote `request:"mediaType=application/json"`
	Security    CreditNotesUpdateSecurity
}

type CreditNotesUpdateResponse struct {
	BadRequestResponse       *shared.BadRequestResponse
	ContentType              string
	NotFoundResponse         *shared.NotFoundResponse
	PaymentRequiredResponse  *shared.PaymentRequiredResponse
	StatusCode               int64
	UnauthorizedResponse     *shared.UnauthorizedResponse
	UnexpectedErrorResponse  *shared.UnexpectedErrorResponse
	UnprocessableResponse    *shared.UnprocessableResponse
	UpdateCreditNoteResponse *shared.UpdateCreditNoteResponse
}
