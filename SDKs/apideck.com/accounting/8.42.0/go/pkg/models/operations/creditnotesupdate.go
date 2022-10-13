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
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
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
	BadRequestResponse       *interface{}
	ContentType              string
	NotFoundResponse         *interface{}
	PaymentRequiredResponse  *interface{}
	StatusCode               int64
	UnauthorizedResponse     *interface{}
	UnexpectedErrorResponse  *interface{}
	UnprocessableResponse    *interface{}
	UpdateCreditNoteResponse *shared.UpdateCreditNoteResponse
}
