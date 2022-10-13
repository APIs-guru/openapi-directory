package operations

import (
	"openapi/pkg/models/shared"
)

type ConnectionsOnePathParams struct {
	ServiceID  string `pathParam:"style=simple,explode=false,name=service_id"`
	UnifiedAPI string `pathParam:"style=simple,explode=false,name=unified_api"`
}

type ConnectionsOneHeaders struct {
	XApideckAppID      string `header:"name=x-apideck-app-id"`
	XApideckConsumerID string `header:"name=x-apideck-consumer-id"`
}

type ConnectionsOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ConnectionsOneRequest struct {
	PathParams ConnectionsOnePathParams
	Headers    ConnectionsOneHeaders
	Security   ConnectionsOneSecurity
}

type ConnectionsOneResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetConnectionResponse   *shared.GetConnectionResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
