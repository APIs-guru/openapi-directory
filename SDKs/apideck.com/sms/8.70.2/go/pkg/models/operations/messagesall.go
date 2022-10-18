package operations

import (
	"openapi/pkg/models/shared"
)

type MessagesAllQueryParams struct {
	Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
	Limit  *int64  `queryParam:"style=form,explode=true,name=limit"`
	Raw    *bool   `queryParam:"style=form,explode=true,name=raw"`
}

type MessagesAllHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type MessagesAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type MessagesAllRequest struct {
	QueryParams MessagesAllQueryParams
	Headers     MessagesAllHeaders
	Security    MessagesAllSecurity
}

type MessagesAllResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	GetMessagesResponse     *shared.GetMessagesResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
