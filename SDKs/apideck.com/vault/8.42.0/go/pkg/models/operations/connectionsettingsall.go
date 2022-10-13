package operations

import (
	"openapi/pkg/models/shared"
)

type ConnectionSettingsAllPathParams struct {
	Resource   string `pathParam:"style=simple,explode=false,name=resource"`
	ServiceID  string `pathParam:"style=simple,explode=false,name=service_id"`
	UnifiedAPI string `pathParam:"style=simple,explode=false,name=unified_api"`
}

type ConnectionSettingsAllHeaders struct {
	XApideckAppID      string `header:"name=x-apideck-app-id"`
	XApideckConsumerID string `header:"name=x-apideck-consumer-id"`
}

type ConnectionSettingsAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ConnectionSettingsAllRequest struct {
	PathParams ConnectionSettingsAllPathParams
	Headers    ConnectionSettingsAllHeaders
	Security   ConnectionSettingsAllSecurity
}

type ConnectionSettingsAllResponse struct {
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
