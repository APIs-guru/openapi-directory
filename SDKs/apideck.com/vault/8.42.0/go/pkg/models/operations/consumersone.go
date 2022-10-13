package operations

import (
	"openapi/pkg/models/shared"
)

type ConsumersOnePathParams struct {
	ConsumerID string `pathParam:"style=simple,explode=false,name=consumer_id"`
}

type ConsumersOneHeaders struct {
	XApideckAppID string `header:"name=x-apideck-app-id"`
}

type ConsumersOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ConsumersOneRequest struct {
	PathParams ConsumersOnePathParams
	Headers    ConsumersOneHeaders
	Security   ConsumersOneSecurity
}

type ConsumersOneResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetConsumerResponse     *shared.GetConsumerResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
