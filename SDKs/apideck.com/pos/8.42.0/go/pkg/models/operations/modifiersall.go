package operations

import (
	"openapi/pkg/models/shared"
)

type ModifiersAllQueryParams struct {
	Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
	Limit  *int64  `queryParam:"style=form,explode=true,name=limit"`
	Raw    *bool   `queryParam:"style=form,explode=true,name=raw"`
}

type ModifiersAllHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type ModifiersAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ModifiersAllRequest struct {
	QueryParams ModifiersAllQueryParams
	Headers     ModifiersAllHeaders
	Security    ModifiersAllSecurity
}

type ModifiersAllResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetModifiersResponse    *shared.GetModifiersResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
