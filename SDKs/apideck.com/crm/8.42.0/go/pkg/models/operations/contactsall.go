package operations

import (
	"openapi/pkg/models/shared"
)

type ContactsAllQueryParams struct {
	Cursor *string                `queryParam:"style=form,explode=true,name=cursor"`
	Filter *shared.ContactsFilter `queryParam:"style=deepObject,explode=true,name=filter"`
	Limit  *int64                 `queryParam:"style=form,explode=true,name=limit"`
	Raw    *bool                  `queryParam:"style=form,explode=true,name=raw"`
	Sort   *shared.ContactsSort   `queryParam:"style=deepObject,explode=true,name=sort"`
}

type ContactsAllHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type ContactsAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ContactsAllRequest struct {
	QueryParams ContactsAllQueryParams
	Headers     ContactsAllHeaders
	Security    ContactsAllSecurity
}

type ContactsAllResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetContactsResponse     *shared.GetContactsResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
