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
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type MessagesUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type MessagesUpdateRequest struct {
	PathParams  MessagesUpdatePathParams
	QueryParams MessagesUpdateQueryParams
	Headers     MessagesUpdateHeaders
	Request     shared.MessageInput `request:"mediaType=application/json"`
	Security    MessagesUpdateSecurity
}

type MessagesUpdateResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
	UpdateMessageResponse   *shared.UpdateMessageResponse
}
