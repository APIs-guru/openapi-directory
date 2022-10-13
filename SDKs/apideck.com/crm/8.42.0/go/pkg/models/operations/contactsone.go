package operations

import (
	"openapi/pkg/models/shared"
)

type ContactsOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ContactsOneQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type ContactsOneHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type ContactsOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ContactsOneRequest struct {
	PathParams  ContactsOnePathParams
	QueryParams ContactsOneQueryParams
	Headers     ContactsOneHeaders
	Security    ContactsOneSecurity
}

type ContactsOneResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetContactResponse      *shared.GetContactResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
