package operations

import (
	"openapi/pkg/models/shared"
)

type ConnectionsDeletePathParams struct {
	ServiceID  string `pathParam:"style=simple,explode=false,name=service_id"`
	UnifiedAPI string `pathParam:"style=simple,explode=false,name=unified_api"`
}

type ConnectionsDeleteHeaders struct {
	XApideckAppID      string `header:"name=x-apideck-app-id"`
	XApideckConsumerID string `header:"name=x-apideck-consumer-id"`
}

type ConnectionsDeleteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ConnectionsDeleteRequest struct {
	PathParams ConnectionsDeletePathParams
	Headers    ConnectionsDeleteHeaders
	Security   ConnectionsDeleteSecurity
}

type ConnectionsDeleteResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
