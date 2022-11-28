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
	XApideckAppID      string `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
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
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	GetConnectionResponse   *shared.GetConnectionResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
