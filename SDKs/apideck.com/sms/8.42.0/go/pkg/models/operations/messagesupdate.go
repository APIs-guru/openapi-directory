package operations

import (
	"openapi/pkg/models/shared"
)

type MessagesUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type MessagesUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type MessagesUpdateHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type MessagesUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type MessagesUpdateRequest struct {
	PathParams  MessagesUpdatePathParams
	QueryParams MessagesUpdateQueryParams
	Headers     MessagesUpdateHeaders
	Request     shared.Message `request:"mediaType=application/json"`
	Security    MessagesUpdateSecurity
}

type MessagesUpdateResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
	UpdateMessageResponse   *shared.UpdateMessageResponse
}
