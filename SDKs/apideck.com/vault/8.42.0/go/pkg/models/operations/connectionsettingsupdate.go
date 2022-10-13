package operations

import (
	"openapi/pkg/models/shared"
)

type ConnectionSettingsUpdatePathParams struct {
	Resource   string `pathParam:"style=simple,explode=false,name=resource"`
	ServiceID  string `pathParam:"style=simple,explode=false,name=service_id"`
	UnifiedAPI string `pathParam:"style=simple,explode=false,name=unified_api"`
}

type ConnectionSettingsUpdateHeaders struct {
	XApideckAppID      string `header:"name=x-apideck-app-id"`
	XApideckConsumerID string `header:"name=x-apideck-consumer-id"`
}

type ConnectionSettingsUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ConnectionSettingsUpdateRequest struct {
	PathParams ConnectionSettingsUpdatePathParams
	Headers    ConnectionSettingsUpdateHeaders
	Request    shared.Connection `request:"mediaType=application/json"`
	Security   ConnectionSettingsUpdateSecurity
}

type ConnectionSettingsUpdateResponse struct {
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
