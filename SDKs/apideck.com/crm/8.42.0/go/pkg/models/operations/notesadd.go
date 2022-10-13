package operations

import (
	"openapi/pkg/models/shared"
)

type NotesAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type NotesAddHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type NotesAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type NotesAddRequest struct {
	QueryParams NotesAddQueryParams
	Headers     NotesAddHeaders
	Request     shared.Note `request:"mediaType=application/json"`
	Security    NotesAddSecurity
}

type NotesAddResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	CreateNoteResponse      *shared.CreateNoteResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
