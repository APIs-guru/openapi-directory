package operations

import (
	"openapi/pkg/models/shared"
)

type ContactsAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type ContactsAddHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type ContactsAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ContactsAddRequest struct {
	QueryParams ContactsAddQueryParams
	Headers     ContactsAddHeaders
	Request     interface{} `request:"mediaType=application/json"`
	Security    ContactsAddSecurity
}

type ContactsAddResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	CreateContactResponse   *shared.CreateContactResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
