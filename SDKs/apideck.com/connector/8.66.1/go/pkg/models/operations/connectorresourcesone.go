package operations

import (
	"openapi/pkg/models/shared"
)

type ConnectorResourcesOnePathParams struct {
	ID         string `pathParam:"style=simple,explode=false,name=id"`
	ResourceID string `pathParam:"style=simple,explode=false,name=resource_id"`
}

type ConnectorResourcesOneHeaders struct {
	XApideckAppID string `header:"name=x-apideck-app-id"`
}

type ConnectorResourcesOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ConnectorResourcesOneRequest struct {
	PathParams ConnectorResourcesOnePathParams
	Headers    ConnectorResourcesOneHeaders
	Security   ConnectorResourcesOneSecurity
}

type ConnectorResourcesOneResponse struct {
	ContentType                  string
	GetConnectorResourceResponse *shared.GetConnectorResourceResponse
	NotFoundResponse             *shared.NotFoundResponse
	PaymentRequiredResponse      *shared.PaymentRequiredResponse
	StatusCode                   int64
	UnauthorizedResponse         *shared.UnauthorizedResponse
	UnexpectedErrorResponse      *shared.UnexpectedErrorResponse
}
