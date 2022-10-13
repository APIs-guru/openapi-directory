package operations

import (
	"openapi/pkg/models/shared"
)

type CreditNotesDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CreditNotesDeleteQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type CreditNotesDeleteHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type CreditNotesDeleteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type CreditNotesDeleteRequest struct {
	PathParams  CreditNotesDeletePathParams
	QueryParams CreditNotesDeleteQueryParams
	Headers     CreditNotesDeleteHeaders
	Security    CreditNotesDeleteSecurity
}

type CreditNotesDeleteResponse struct {
	BadRequestResponse       *shared.BadRequestResponse
	ContentType              string
	DeleteCreditNoteResponse *shared.DeleteCreditNoteResponse
	NotFoundResponse         *shared.NotFoundResponse
	PaymentRequiredResponse  *shared.PaymentRequiredResponse
	StatusCode               int64
	UnauthorizedResponse     *shared.UnauthorizedResponse
	UnexpectedErrorResponse  *shared.UnexpectedErrorResponse
	UnprocessableResponse    *shared.UnprocessableResponse
}
