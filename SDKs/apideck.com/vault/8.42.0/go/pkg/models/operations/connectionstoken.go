package operations

import (
	"openapi/pkg/models/shared"
)

type ConnectionsTokenPathParams struct {
	ServiceID  string `pathParam:"style=simple,explode=false,name=service_id"`
	UnifiedAPI string `pathParam:"style=simple,explode=false,name=unified_api"`
}

type ConnectionsTokenHeaders struct {
	XApideckAppID      string `header:"name=x-apideck-app-id"`
	XApideckConsumerID string `header:"name=x-apideck-consumer-id"`
}

type ConnectionsTokenSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ConnectionsTokenRequest struct {
	PathParams ConnectionsTokenPathParams
	Headers    ConnectionsTokenHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
	Security   ConnectionsTokenSecurity
}

type ConnectionsTokenResponse struct {
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
