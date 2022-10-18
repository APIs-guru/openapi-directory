package operations

import (
	"openapi/pkg/models/shared"
)

type ApisOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ApisOneHeaders struct {
	XApideckAppID string `header:"name=x-apideck-app-id"`
}

type ApisOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ApisOneRequest struct {
	PathParams ApisOnePathParams
	Headers    ApisOneHeaders
	Security   ApisOneSecurity
}

type ApisOneResponse struct {
	ContentType             string
	GetAPIResponse          *shared.GetAPIResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
}
