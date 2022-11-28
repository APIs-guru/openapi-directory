package operations

import (
	"openapi/pkg/models/shared"
)

type NotesUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type NotesUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type NotesUpdateHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type NotesUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type NotesUpdateRequest struct {
	PathParams  NotesUpdatePathParams
	QueryParams NotesUpdateQueryParams
	Headers     NotesUpdateHeaders
	Request     shared.NoteInput `request:"mediaType=application/json"`
	Security    NotesUpdateSecurity
}

type NotesUpdateResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
	UpdateNoteResponse      *shared.UpdateNoteResponse
}
