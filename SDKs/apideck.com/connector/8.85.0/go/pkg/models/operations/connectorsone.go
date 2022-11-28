package operations

import (
	"openapi/pkg/models/shared"
)

type ConnectorsOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ConnectorsOneHeaders struct {
	XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
}

type ConnectorsOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ConnectorsOneRequest struct {
	PathParams ConnectorsOnePathParams
	Headers    ConnectorsOneHeaders
	Security   ConnectorsOneSecurity
}

type ConnectorsOneResponse struct {
	ContentType             string
	GetConnectorResponse    *shared.GetConnectorResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
}
