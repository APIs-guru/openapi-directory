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
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
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
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	GetContactResponse      *shared.GetContactResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
