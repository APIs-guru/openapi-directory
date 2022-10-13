package operations

import (
	"openapi/pkg/models/shared"
)

type ConnectionsImportPathParams struct {
	ServiceID  string `pathParam:"style=simple,explode=false,name=service_id"`
	UnifiedAPI string `pathParam:"style=simple,explode=false,name=unified_api"`
}

type ConnectionsImportHeaders struct {
	XApideckAppID      string `header:"name=x-apideck-app-id"`
	XApideckConsumerID string `header:"name=x-apideck-consumer-id"`
}

type ConnectionsImportSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ConnectionsImportRequest struct {
	PathParams ConnectionsImportPathParams
	Headers    ConnectionsImportHeaders
	Request    shared.ConnectionImportData `request:"mediaType=application/json"`
	Security   ConnectionsImportSecurity
}

type ConnectionsImportResponse struct {
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
