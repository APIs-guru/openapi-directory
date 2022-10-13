package operations

import (
	"openapi/pkg/models/shared"
)

type MessagesOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type MessagesOneQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type MessagesOneHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type MessagesOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type MessagesOneRequest struct {
	PathParams  MessagesOnePathParams
	QueryParams MessagesOneQueryParams
	Headers     MessagesOneHeaders
	Security    MessagesOneSecurity
}

type MessagesOneResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetMessageResponse      *shared.GetMessageResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
