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
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type NotesUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type NotesUpdateRequest struct {
	PathParams  NotesUpdatePathParams
	QueryParams NotesUpdateQueryParams
	Headers     NotesUpdateHeaders
	Request     shared.Note `request:"mediaType=application/json"`
	Security    NotesUpdateSecurity
}

type NotesUpdateResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
	UpdateNoteResponse      *shared.UpdateNoteResponse
}
