package operations

import (
	"openapi/pkg/models/shared"
)

type MessagesAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type MessagesAddHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type MessagesAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type MessagesAddRequest struct {
	QueryParams MessagesAddQueryParams
	Headers     MessagesAddHeaders
	Request     shared.Message `request:"mediaType=application/json"`
	Security    MessagesAddSecurity
}

type MessagesAddResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	CreateMessageResponse   *shared.CreateMessageResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
