package operations

import (
	"openapi/pkg/models/shared"
)

type ConnectorsOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ConnectorsOneHeaders struct {
	XApideckAppID string `header:"name=x-apideck-app-id"`
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
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
}
