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
	Request     shared.Contact `request:"mediaType=application/json"`
	Security    ContactsAddSecurity
}

type ContactsAddResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	CreateContactResponse   *shared.CreateContactResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
