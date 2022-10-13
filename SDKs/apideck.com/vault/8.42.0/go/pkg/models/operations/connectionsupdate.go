package operations

import (
	"openapi/pkg/models/shared"
)

type ConnectionsUpdatePathParams struct {
	ServiceID  string `pathParam:"style=simple,explode=false,name=service_id"`
	UnifiedAPI string `pathParam:"style=simple,explode=false,name=unified_api"`
}

type ConnectionsUpdateHeaders struct {
	XApideckAppID      string `header:"name=x-apideck-app-id"`
	XApideckConsumerID string `header:"name=x-apideck-consumer-id"`
}

type ConnectionsUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ConnectionsUpdateRequest struct {
	PathParams ConnectionsUpdatePathParams
	Headers    ConnectionsUpdateHeaders
	Request    shared.Connection `request:"mediaType=application/json"`
	Security   ConnectionsUpdateSecurity
}

type ConnectionsUpdateResponse struct {
	BadRequestResponse       *interface{}
	ContentType              string
	NotFoundResponse         *interface{}
	PaymentRequiredResponse  *interface{}
	StatusCode               int64
	UnauthorizedResponse     *interface{}
	UnexpectedErrorResponse  *interface{}
	UnprocessableResponse    *interface{}
	UpdateConnectionResponse *shared.UpdateConnectionResponse
}
