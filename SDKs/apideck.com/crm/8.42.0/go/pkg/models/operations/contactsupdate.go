package operations

import (
	"openapi/pkg/models/shared"
)

type ContactsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ContactsUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type ContactsUpdateHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type ContactsUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ContactsUpdateRequest struct {
	PathParams  ContactsUpdatePathParams
	QueryParams ContactsUpdateQueryParams
	Headers     ContactsUpdateHeaders
	Request     interface{} `request:"mediaType=application/json"`
	Security    ContactsUpdateSecurity
}

type ContactsUpdateResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
	UpdateContactResponse   *shared.UpdateContactResponse
}
