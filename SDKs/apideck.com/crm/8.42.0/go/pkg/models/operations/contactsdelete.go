package operations

import (
	"openapi/pkg/models/shared"
)

type ContactsDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ContactsDeleteQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type ContactsDeleteHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type ContactsDeleteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ContactsDeleteRequest struct {
	PathParams  ContactsDeletePathParams
	QueryParams ContactsDeleteQueryParams
	Headers     ContactsDeleteHeaders
	Security    ContactsDeleteSecurity
}

type ContactsDeleteResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	DeleteContactResponse   *shared.DeleteContactResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
