package operations

import (
	"openapi/pkg/models/shared"
)

type ConnectionsAddPathParams struct {
	ServiceID  string `pathParam:"style=simple,explode=false,name=service_id"`
	UnifiedAPI string `pathParam:"style=simple,explode=false,name=unified_api"`
}

type ConnectionsAddHeaders struct {
	XApideckAppID      string `header:"name=x-apideck-app-id"`
	XApideckConsumerID string `header:"name=x-apideck-consumer-id"`
}

type ConnectionsAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ConnectionsAddRequest struct {
	PathParams ConnectionsAddPathParams
	Headers    ConnectionsAddHeaders
	Request    shared.Connection `request:"mediaType=application/json"`
	Security   ConnectionsAddSecurity
}

type ConnectionsAddResponse struct {
	BadRequestResponse       *interface{}
	ContentType              string
	CreateConnectionResponse *shared.CreateConnectionResponse
	NotFoundResponse         *interface{}
	PaymentRequiredResponse  *interface{}
	StatusCode               int64
	UnauthorizedResponse     *interface{}
	UnexpectedErrorResponse  *interface{}
	UnprocessableResponse    *interface{}
}
